import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import ExpenseTracker from "./Components/ExpenseTracker.jsx";
import './App.css'

export default function App() {
  return (
    <>
      <Navbar navbarTitle="Expense Tracker" />
      {/* <Practice /> */}
      <ExpenseTracker />
    </>
  );
}