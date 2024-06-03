// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Page from "./pages/Page";


function App() {

  console.log("sdasd", process.env.REACT_APP_API_URL)

  return (
    <div className="App">
   <BrowserRouter>
      <Page/>
    </BrowserRouter>
    </div>
  );
}

export default App;
