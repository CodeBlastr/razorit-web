import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const siteName = import.meta.env.VITE_SITE_NAME || "Website";
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const fetchToken = async () => {
    try {
      const formData = new URLSearchParams();
      formData.append("client_id", clientId);
      formData.append("client_secret", clientSecret);

      const res = await fetch(`${apiBaseUrl}/auth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await res.json();
      if (res.ok && data.access_token) {
        localStorage.setItem("jwt", data.access_token);
        setToken(data.access_token);
        return data.access_token;
      } else {
        setResponse("Failed to get authentication token.");
        return null;
      }
    } catch (error) {
      setResponse("Network error while fetching token.");
      return null;
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");
    if (storedToken) {
      setToken(storedToken);
    } else {
      fetchToken();
    }
  }, [apiBaseUrl, clientId, clientSecret]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const sendRequest = async (useNewToken = false) => {
      const authToken = useNewToken ? await fetchToken() : token;

      if (!authToken) {
        setResponse("Authentication token missing. Please refresh and try again.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${apiBaseUrl}/send-contact/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            subject: `${siteName} Information Request`,
            message: formData.message,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setResponse("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else if (data.detail === "Invalid credentials" && !useNewToken) {
          // ✅ Retry the request once with a new token
          await sendRequest(true);
        } else {
          setResponse(`Error: ${data.detail || "Something went wrong"}`);
        }
      } catch (error) {
        setResponse("Network error. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    await sendRequest();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      {response && <p className="mb-4 text-sm text-center">{response}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 mb-3 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
