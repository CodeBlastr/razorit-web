const API_BASE_URL = "http://localhost:8000";

async function getAuthToken() {
    // Fetch token from local storage or request a new one
    let token = localStorage.getItem("authToken");
    
    if (!token) {
        const response = await fetch(`${API_BASE_URL}/token`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                username: "razorit",
                password: "hwi9288f989sj9JSFjo2099029^jwfo22@iwfk",
            }),
        });

        if (!response.ok) {
            console.error("Failed to authenticate:", response.statusText);
            return null;
        }

        const data = await response.json();
        token = data.access_token;
        localStorage.setItem("authToken", token);
    }

    return token;
}