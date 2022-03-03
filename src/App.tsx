import React from 'react';
import './App.css';
import Navbar from "./components/navigation/Navbar";
import Layout from "./layout/Layout";
import Brandline from "./components/brandline/Brandline";
import Catalog from "./components/pagescomponents/Catalog";
import Main from "./components/main/Main";




function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <Catalog/>
        <Brandline/>
        <Layout/>

    </div>
  );
}

export default App;
