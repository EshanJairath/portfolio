import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import BlogHome from "./components/Blogs/BlogHome"
import DiffPriv from "./components/Blogs/BlogPosts/Diff_priv"
import DataDrift from "./components/Blogs/BlogPosts/Data_drift"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stratification from "./components/Blogs/BlogPosts/Stratification";
import Flask from "./components/Blogs/BlogPosts/Flask";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename='/'>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/blogs/differential_privacy" element={<DiffPriv/>}/>
        <Route path="/blogs/data_drift" element={<DataDrift/>}/>
        <Route path="/blogs/strat" element={<Stratification/>}/>
        <Route path="/blogs/flask" element={<Flask/>}/>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// homepage": "https://portfolio-eshanjairath.vercel.app", in package.json
// When needed to reupload to github add the above line to package.json
// and then add the /portfolio in the base command on line 31 