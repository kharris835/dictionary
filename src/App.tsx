import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container pt-4 pb-4">
        <header className="text-center">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="mt-3 text-center">
          <a href="https://github.com/kharris835/dictionary">Open-source</a>{" "}
          code by{" "}
          <a
            href="https://spontaneous-croquembouche-c44b06.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Kelsie Harris
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
