import React from 'react';
import './App.css';
import Layout from "./layout/Layout";
import Brandline from "./components/brandline/Brandline";
import Catalog from "./components/pagescomponents/Catalog";
import Main from "./components/main/Main";
import Main1 from "./components/main1/Main1";




function App() {
  return (
    <div className="App">
        <Main1/>
        <Main/>
        <Catalog/>
        <Brandline/>
        <Layout/>


    </div>
  );
}

export default App;
