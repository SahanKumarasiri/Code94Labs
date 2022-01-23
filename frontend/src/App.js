import "./App.css";

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import UpdateRecipe from "./components/UpdateRecipe";
import ViewRecipe from "./components/ViewRecipe";

const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="container">
      {/* Froentend routing goes here */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/edit/:id" element={<UpdateRecipe />} />
          <Route path="/view/:id" element={<ViewRecipe />} />
        </Routes>
        <Footer />
      </Router>
      <>
        {/* React Fragment */}
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
          </button>
        )}
        {/* &#8679; is used to create the upward arrow */}
      </>
    </div>
  );
};

export default App;
