import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import ExpenseTracker from "./Components/ExpenseTracker.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
      <Router>
        <Navbar navbarTitle="BudgetBuddy" firstNavComponent="Home" secondNavComponent="About Me" />
        <Routes>
          <Route path="/" element={<ExpenseTracker expenseTrackerHeading = "Spend Smart, Save Big !!"/>}/>
          <Route path="/home" element={<ExpenseTracker expenseTrackerHeading = "Spend Smart, Save Big !!"/>} />
          <Route path = "/aboutme" element = {<AboutMe />}/>
        </Routes>
        <Analytics />
      </Router>
    </>
  );
}