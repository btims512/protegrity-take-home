import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import ApiData from './components/Api/Api'

import "./styles/global-styles.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await ApiData();
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Body data={data} />
      <Footer />
    </div>
  );
}

export default App;
