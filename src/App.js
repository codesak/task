import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import PersonalDetails from "./components/PersonalDetails";
import BusinessDetails from "./components/BusinessDetails";
import LoanDetails from "./components/LoanDetails";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="loanprocess">
        <Router>
          <Routes>
            <Route path="/" element={<PersonalDetails />}></Route>
            <Route exact path="/BusinessDetails" element={<BusinessDetails />}></Route>
            <Route path="/LoanDetails" element={<LoanDetails />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
