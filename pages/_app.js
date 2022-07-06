import Header from "../src/components/Header";
import "../styles/globals.css";
import Footer from "../src/components/Footer";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
};

export default MyApp;
