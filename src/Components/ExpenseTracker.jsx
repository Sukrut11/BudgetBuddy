import React, { useState, useEffect } from "react";
import FilterExpenseComponent from "./FilterExpenseComponent";

export default function ExpenseTracker(props) {
  const [expenseDetails, createExpenseDetails] = useState({
    expenseName: "",
    expenseAmount: "",
    expenseCategory: "Personal Expense",
    expenseDate: "",
  });

  const [expenseListArrayContents, updateExpenseListArrayContents] = useState(
    []
  );

  const [fetchedDate, setFetchedDate] = useState({
    activeDateType: "",
    activeDate: "",
  });

  // Helper function to convert "DD MMM YY" to "YYYY-MM-DD"
  const convertExpenseDate = (formattedDate) => {
    const [day, monthShort, yearShort] = formattedDate.split(" ");
    const monthNames = {
      Jan: "0",
      Feb: "1",
      Mar: "2",
      Apr: "3",
      May: "4",
      Jun: "5",
      Jul: "6",
      Aug: "7",
      Sep: "8",
      Oct: "9",
      Nov: "10",
      Dec: "11",
    };

    const year = `20${yearShort}`; // Convert "YY" to "YYYY"
    const month = monthNames[monthShort];
    const dayPadded = day.padStart(2, "0"); // Ensure day is two digits

    return `${year}-${month}-${dayPadded}`;
  };

  const addExpenseDetails = () => {
    // Ensure all fields are filled out
    if (
      expenseDetails.expenseName === "" ||
      expenseDetails.expenseAmount === "" ||
      expenseDetails.expenseCategory === "" ||
      expenseDetails.expenseDate === ""
    ) {
      alert("Please complete all input fields.");
      return;
    }

    // Format the date before adding it to expense list
    const formattedDetails = {
      ...expenseDetails,
      expenseDate: formatDate(expenseDetails.expenseDate),
    };

    // Update the expense list with current expenseDetails
    updateExpenseListArrayContents((prevContentsOfArray) => [
      ...prevContentsOfArray,
      formattedDetails,
    ]);

    // Reset the expenseDetails to its default state
    createExpenseDetails({
      expenseName: "",
      expenseAmount: "",
      expenseCategory: "Personal Expense",
      expenseDate: "",
    });
  };

  const handleExpenseInputChange = (event) => {
    const { name, value } = event.target;
    createExpenseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Function to remove latest expense from the array
  const removeLatestExpense = () => {
    updateExpenseListArrayContents((prevContentsOfArray) =>
      prevContentsOfArray.slice(0, -1)
    );
  };

  // Remove particular expense from list
  const removeParticularElementFromList = (indexOfExpense) => {
    updateExpenseListArrayContents((prevContentsOfArray) =>
      prevContentsOfArray.filter((_, index) => index !== indexOfExpense)
    );
  };

  // Format date into desired format eg - 07 Jan 25
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    }).format(date);
  };

  // Fetch active date
  const fetchActiveFilterDate = (activeDateType, activeDate) => {
    setFetchedDate({ activeDateType, activeDate });
  };

  // Filter logic for Expense Details
  const filteredExpenses = (fetchedDate, fetchedDateType) => {
    let formattedFetchedDate = fetchedDate;

    // Month Name object
    const monthNames = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    // Only format fetchedDate for day, month, and year
    if (["day", "year"].includes(fetchedDateType)) {
      formattedFetchedDate = formatDate(fetchedDate);
    }

    // filter expense list on the basis of date
    return expenseListArrayContents.filter((expense) => {
      const expenseDate = expense.expenseDate;
      if (fetchedDateType === "day") {
        if (expenseDate.slice(0, 2) === formattedFetchedDate.slice(0, 2)) {
          return expense;
        }
      } else if (fetchedDateType === "week") {
        // month names object for week

        // Parse the first and last dates of the fetched week range
        const [firstDay, firstMonth, firstYear] = fetchedDate
          .slice(0, 9)
          .split(" ");
        const [lastDay, lastMonth, lastYear] = fetchedDate.slice(12).split(" ");

        // Construct valid Date objects
        const firstDate = new Date(
          `20${firstYear}`,
          monthNames[firstMonth],
          firstDay
        );
        const lastDate = new Date(
          `20${lastYear}`,
          monthNames[lastMonth],
          lastDay
        );

        // Parse the expense date into a Date object
        const [expenseDay, expenseMonth, expenseYear] = expenseDate.split(" ");
        const expenseDateObj = new Date(
          `20${expenseYear}`,
          monthNames[expenseMonth],
          expenseDay
        );

        // Log the parsed dates for debugging
        console.log("First Date Object:", firstDate);
        console.log("Last Date Object:", lastDate);
        console.log("Expense Date Object:", expenseDateObj);

        // Check if the expense date falls within the range
        if (expenseDateObj >= firstDate && expenseDateObj <= lastDate) {
          console.log("Expense within week range:", expense);
          return expense;
        } else {
          console.log("Expense outside week range:", expense);
        }
      } else if (fetchedDateType === "month") {
        // Parse fetchedDate as month index and get corresponding month name
        const selectedMonthIndex = parseInt(fetchedDate, 10);
        const selectedMonth = Object.keys(monthNames).find(
          (month) => monthNames[month] === selectedMonthIndex
        );

        // Current year (last two digits)
        const currentYear = new Date().getFullYear().toString().slice(-2);

        // Destructure expense date
        const [_, expenseMonth, expenseYear] = expenseDate.split(" ");

        // Compare month and year
        if (expenseMonth === selectedMonth && expenseYear === currentYear) {
          return expense;
        }
      } else if (fetchedDateType === "year") {
        const fetchedYear = formattedFetchedDate.split(" ")[2]; // Extract year
        const expenseYear = expenseDate.split(" ")[2]; // Extract year

        if (fetchedYear === expenseYear) {
          return expense;
        }
      }
    });
  };

  const clearFilterValues = () => {
    if (fetchedDate.activeDate || fetchedDate.activeDateType) {
      setFetchedDate({ activeDateType: "", activeDate: "" });
    }
  };

  expenseListArrayContents.map((expense) => {
    console.log(expense);
  });

  return (
    <>
      <h3 className="heading my-3" align="center">
        {props.expenseTrackerHeading}
      </h3>
      <div className="container my-3">
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Expense Name: </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="expenseName"
              value={expenseDetails.expenseName}
              onChange={handleExpenseInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput2">Expense Amount:</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput2"
              name="expenseAmount"
              value={expenseDetails.expenseAmount}
              onChange={handleExpenseInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect3">Expense Category:</label>
            <select
              className="form-control"
              id="exampleFormControlSelect3"
              name="expenseCategory"
              value={expenseDetails.expenseCategory}
              onChange={handleExpenseInputChange}
            >
              <option>Personal Expense</option>
              <option>Daily Expense</option>
              <option>Utilities Expense</option>
              <option>Housing Expense</option>
              <option>Tax Expense</option>
              <option>Investment Expense</option>
              <option>Non Recurring Expense</option>
              <option>Health Care Expense</option>
              <option>Miscellaneous expense</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput4">Expense Date:</label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput4"
              name="expenseDate"
              value={expenseDetails.expenseDate}
              onChange={handleExpenseInputChange}
              placeholder="dd-mm-yyyy"
            />
          </div>
          <button
            type="button"
            className="btn btn-success mx-3 my-3"
            onClick={addExpenseDetails}
          >
            Add Expense
          </button>
          <button
            type="button"
            className="btn btn-danger mx-3 my-3"
            onClick={removeLatestExpense}
          >
            Remove Expense
          </button>
          {/* Filter Button imported using Component */}
          <FilterExpenseComponent
            fetchActiveFilterDate={fetchActiveFilterDate}
          />
          <button
            className="btn btn-danger mx-3 my-3"
            onClick={(event) => {
              event.preventDefault();
              clearFilterValues();
            }}
          >
            Clear Filter
          </button>
        </form>
        <div className="expensesList">
          {expenseListArrayContents.length === 0 ? (
            // Case 1: No expenses have been added at all
            <h3>No expenses created.</h3>
          ) : fetchedDate.activeDateType && fetchedDate.activeDate ? (
            // Case 2: Filter is applied
            filteredExpenses(fetchedDate.activeDate, fetchedDate.activeDateType)
              .length > 0 ? (
              // Case 2a: Filter applied and matching results found
              <ol>
                {filteredExpenses(
                  fetchedDate.activeDate,
                  fetchedDate.activeDateType
                ).map((expense, index) => (
                  <li
                    className="my-3"
                    key={index}
                    style={{
                      fontSize: "20px",
                      width: "60%",
                      borderBottom: "1px solid #ccc",
                      paddingBottom: "15px",
                    }}
                  >
                    <div className="container-fluid d-flex justify-content-between align-items-center mt-2">
                      {expense.expenseName}
                      <span>{expense.expenseDate}</span>
                    </div>
                    <br />
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                      <span>
                        <strong>Rs. </strong>
                        {expense.expenseAmount}
                      </span>
                      <div className="d-flex justify-content-center">
                        <span className="d-flex justify-content-center align-items-center badge badge-info mr-3">
                          {expense.expenseCategory}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeParticularElementFromList(index)}
                          className="btn btn-danger"
                        >
                          Remove Expense
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              // Case 2b: Filter applied but no matching results
              <h3>
                No expenses found for{" "}
                {fetchedDate.activeDateType === "week"
                  ? fetchedDate.activeDate // Show week range directly
                  : formatDate(fetchedDate.activeDate)}
                .
              </h3>
            )
          ) : (
            // Case 3: No filter applied, show all expenses
            <ol className="expense-list" style={{ textAlign: "left", paddingLeft: "0" }}>
              {expenseListArrayContents.map((expense, index) => (
                <li className="expenseItem my-4 ml-2" key={index}>
                  {/* Expense Name & Date */}
                  <div className="container-fluid d-flex justify-content-between align-items-center mt-2 text-start">
                    <span className="text-break">{expense.expenseName}</span>
                    <span>{expense.expenseDate}</span>
                  </div>

                  {/* Expense Amount */}
                  <div className="container-fluid mt-2 text-start">
                    <span><strong>Rs. </strong>{expense.expenseAmount}</span>
                  </div>

                  {/* Expense Category & Remove Button - Mobile & Desktop Aligned */}
                  <div className="container-fluid d-flex justify-content-between align-items-center gap-2 mt-2">
                    <span className="badge bg-info text-white px-2 py-2">{expense.expenseCategory}</span>

                    <button type="button" onClick={() => removeParticularElementFromList(index)}
                      className="btn btn-danger px-2 py-1">
                      Remove Expense
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}