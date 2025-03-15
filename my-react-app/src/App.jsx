import { useState } from 'react'
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MovingText from './components/MovingText';
import Home from "./pages/Home";
import News from "./pages/News"
import SalesPage from "./pages/SalesPage";
import Contact from "./pages/Contact";
import Blog from './pages/Blog';
import Card from './components/Card';
import AboutUs from './pages/AboutUs';



import './App.css'



export default function App() {

  
  return (

 

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="salesPage" element={<SalesPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>

 



    

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
