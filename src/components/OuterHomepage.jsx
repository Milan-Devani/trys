import React from "react";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Footer from "./Pages/Footer";
import Trending_Home_page from "./Pages/Trending_Home_page";
import Features from "./Pages/Features";

function OuterHomepage() {
  return (
    <div>
      <Home />
      <Trending_Home_page />
      <Features />
      <Faq />
      <Footer />
    </div>
  );
}

export default OuterHomepage;
