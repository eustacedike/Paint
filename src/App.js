import logo from './logo.svg';
import './App.css';

import Layout from './Layout/layout';
import Home from './Home/home';

import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";


function App() {
  return (
    <div className="App">
      
      {/* <Layout/> */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
