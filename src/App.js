import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import "./styles/global-styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
