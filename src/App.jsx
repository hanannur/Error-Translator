import React, { useState } from 'react';
import './App.css';

function App() {
  const [errorInput, setErrorInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!errorInput) return;

    setLoading(true);
    setResult(null); // Clear previous results

    try {
      // Make sure this matches your backend PORT
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ errorMessage: errorInput }),
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Error Translator 🤖</h1>
        <p>Paste your scary error below, and we'll translate it into human.</p>
      </header>

      <main>
        <div className="input-section">
          <textarea
            placeholder="Example: Error 404: Page not found..."
            value={errorInput}
            onChange={(e) => setErrorInput(e.target.value)}
            rows={5}
          />
          <button onClick={handleTranslate} disabled={loading}>
            {loading ? "Translating..." : "Translate Error"}
          </button>
        </div>

        {result && (
          <div className="result-section">
            <div className="card">
              <h3>Human Translation:</h3>
              <p className="highlight">{result.translation}</p>
            </div>
            
            <div className="card fix-card">
              <h3>Suggested Fix:</h3>
              <p>{result.fix}</p>
            </div>

            <small>Source: {result.source}</small>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;