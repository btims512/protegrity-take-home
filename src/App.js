import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";

import "./styles/global-styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Hero />
      <Body />
    </div>
  );
}

export default App;
