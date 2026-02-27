import { useState } from "react";

import "./App.css";

function App() {
  const [endPoint, setEndPoint] = useState("");
  const [email, setEmail] = useState("");
  const [string, setString] = useState("");
  const [loading, setLoading] = useState(false);
  const BACKEND_URL = "";
  async function testEndPoint() {
    try {
      if (endPoint === "" || email === "") {
        alert("Fields cannot be empty");
        return;
      }
      setLoading(true);

      const res = await fetch(`${BACKEND_URL}/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endPoint, email }),
      });
      const data = await res.json();

      if (res.ok) {
        setString(data.word);
      } else {
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="App">
        <form className="form">
          <h2>Endpoint testing form</h2>
          <div className="line">
            <label htmlFor="endpoint">Endpoint</label>

            <input
              type="endpoint"
              id="endpoint"
              name="endpoint"
              onChange={(e) => setEndPoint(e.target.value)}
            />
          </div>
          <div className="line">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="line">
            <button
              className="submit"
              onClick={loading ? () => {} : testEndPoint}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
        <div>
          {string !== "" && <div className="result">Result: {string}</div>}
        </div>
      </div>
    </>
  );
}

export default App;
