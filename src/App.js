import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container pt-4 pb-4">
        <header className="text-center">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="mt-3">Open-source code by Kelsie Harris</footer>
      </div>
    </div>
  );
}

export default App;
