import logo from "./logo.svg";
import "./App.css";
import BlogContent from "./BlogContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Colby Taylor</div>
        <p className="tagline">Full Stack Developer</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <BlogContent />
    </div>
  );
}

export default App;
