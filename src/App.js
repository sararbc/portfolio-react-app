import React from "react";
import Header from "./Header"
import Work from "./Work"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <Work/>
      </div>
    </div>
  );
}

export default App;
