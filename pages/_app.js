import Header from "../src/components/Header";
import "../styles/globals.css";
import Footer from "../src/components/Footer";
import AppContext from "../context/context";
import { useState } from "react";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  const [service, setService] = useState("1");

  return (
    <AppContext.Provider value={{ service: service, setService: setService }}>
      <Header />

      <div className="container">
        <Component {...pageProps} />
      </div>

      <Footer />
    </AppContext.Provider>
  );
};

export default MyApp;
