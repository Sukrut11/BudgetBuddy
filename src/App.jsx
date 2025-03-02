import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import ExpenseTracker from "./Components/ExpenseTracker.jsx";
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar navbarTitle="Expense Tracker" firstNavComponent="Home" secondNavComponent="About Me" />
        <Routes>
          <Route path="/" element={<ExpenseTracker expenseTrackerHeading = "Expense Tracker Heading"/>} />
          <Route path="/home" element={<ExpenseTracker expenseTrackerHeading = "Expense Tracker Heading"/>} />
        </Routes>
      </Router>
    </>
  );
}