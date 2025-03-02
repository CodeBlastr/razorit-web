import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const siteName = import.meta.env.VITE_SITE_NAME || "Website";
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    try {
      const res = await fetch(`${apiBaseUrl}/send-test-email/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("jwt") || ""}`,
        },
        body: JSON.stringify({
          email: formData.email,
          subject: `${siteName} Information Request`,
          message: `Name: ${formData.name}\n\nMessage: ${formData.message}`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse(`Error: ${data.detail || "Something went wrong"}`);
      }
    } catch (error) {
      setResponse("Network error. Try again later.");
    } finally {
      setLoading(false);
    }
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
