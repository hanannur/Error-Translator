// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [errorInput, setErrorInput] = useState("");
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleTranslate = async () => {
//     if (!errorInput) return;

//     setLoading(true);
//     setResult(null); // Clear previous results

//     try {
//       // Make sure this matches your backend PORT
//       const response = await fetch('http://localhost:5000/translate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ errorMessage: errorInput }),
//       });

//       const data = await response.json();
//       setResult(data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to connect to the server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="app-container">
//       <header>
//         <h1>Error Translator 🤖</h1>
//         <p>Paste your scary error below, and we'll translate it into human.</p>
//       </header>

//       <main>
//         <div className="input-section">
//           <textarea
//             placeholder="Example: Error 404: Page not found..."
//             value={errorInput}
//             onChange={(e) => setErrorInput(e.target.value)}
//             rows={5}
//           />
//           <button onClick={handleTranslate} disabled={loading}>
//             {loading ? "Translating..." : "Translate Error"}
//           </button>
//         </div>

//         {result && (
//           <div className="result-section">
//             <div className="card">
//               <h3>Human Translation:</h3>
//               <p className="highlight">{result.translation}</p>
//             </div>
            
//             <div className="card fix-card">
//               <h3>Suggested Fix:</h3>
//               <p>{result.fix}</p>
//             </div>

//             <small>Source: {result.source}</small>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [errorInput, setErrorInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTranslate = async () => {
    if (!errorInput) return;

    setLoading(true);
    setResult(null);
    setCopied(false);

    try {
      // Ensure this matches your backend PORT
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ errorMessage: errorInput }),
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed to connect to the server. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app-container">
      <header>
        <h1 className="gradient-text">Error Translator 🤖</h1>
        <p>Paste your scary error below, and we'll translate it into human.</p>
      </header>

      <main>
        <div className="input-section">
          <textarea
            placeholder="Example: Uncaught TypeError: Cannot read properties of undefined (reading 'map')..."
            value={errorInput}
            onChange={(e) => setErrorInput(e.target.value)}
            rows={6}
          />
          <button className="main-btn" onClick={handleTranslate} disabled={loading || !errorInput}>
            {loading ? "Analyzing..." : "Translate Error"}
          </button>
        </div>

        {result && (
          <div className="result-section">
            <div className="card translation-card">
              <div className="card-header">
                <h3>Human Translation</h3>
              </div>
              <p className="highlight">{result.translation}</p>
            </div>
            
            <div className="card fix-card">
              <div className="card-header">
                <h3>Suggested Fix</h3>
                <button 
                  className="copy-btn" 
                  onClick={() => copyToClipboard(result.fix)}
                >
                  {copied ? "Copied!" : "Copy Fix"}
                </button>
              </div>
              <code>{result.fix}</code>
            </div>

            <div className="metadata">
              <span>Source: {result.source || "AI Engine"}</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;