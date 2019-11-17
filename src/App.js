import React from "react";
import Routes from "../src/routes";
//import logo from "./logo.svg";

import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
