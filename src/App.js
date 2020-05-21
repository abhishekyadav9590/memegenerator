import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import {ToastContainer,Slide} from "react-toastify";

function App() {
  return (
    <div className="App">
        <ToastContainer
        pauseOnFocusLoss={false}
        newestOnTop={true}
        transition={Slide}
        />
      <Router>
          <Routes/>
      </Router>
    </div>
  );
}

export default App;
