import { useEffect, useState } from "react";
import { API_BASE_URL, CLIENT_ID, CLIENT_SECRET } from "./config";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      // Step 1: Get access token
      const tokenResponse = await fetch(`${API_BASE_URL}/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
      });

      if (!tokenResponse.ok) throw new Error("Failed to fetch token");

      const { access_token } = await tokenResponse.json();

      // Step 2: Fetch data using the token
      const response = await fetch(`${API_BASE_URL}/test-db`, {
        method: "GET",
        headers: { Authorization: `Bearer ${access_token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setData(result.data);
    } catch (err) {
      console.error(err);
      setError("Error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      {error ? <p>{error}</p> : <ul>{data.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
      <button onClick={fetchData}>Refresh Data</button>
    </div>
  );
}

export default App;
