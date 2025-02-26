import React, { createContext, useEffect, useState } from "react";

export default function FilterExpenseComponent(props) {
  // Logic to populate weeks
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  function formatDateToDDMMMYY(date) {
    const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero
    const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
      date
    ); // Abbreviated month
    const year = String(date.getFullYear()).slice(-2); // Last two digits of the year
    return `${day} ${month} ${year}`;
  }

  // Generate weeks for current month
  const getWeeksForCurrentMonth = () => {
    const weeks = [];
    const startOfMonth = new Date(currentYear, currentMonth, 1);
    const endOfMonth = new Date(currentYear, currentMonth + 1, 0);

    let current = new Date(startOfMonth);

    while (current < endOfMonth) {
      const weekStart = new Date(current);
      const weekEnd = new Date(current);
      weekEnd.setDate(weekEnd.getDate() + 6);

      // Adjust the weekend if it exceeds the month
      if (weekEnd > endOfMonth) {
        weekEnd.setDate(endOfMonth.getDate());
      }

      weeks.push({
        start: formatDateToDDMMMYY(weekStart),
        end: formatDateToDDMMMYY(weekEnd),
      });

      // Move to the next week
      current.setDate(current.getDate() + 7);
    }
    return weeks;
  };

  const weeksForCurrentMonth = getWeeksForCurrentMonth();

  // Logic to populate Years
  const yearsForFilterSelection = () => {
    const startYear = 2000;
    const endYear = 2100;

    let currentYear = startYear;
    const years = [];

    while (currentYear <= endYear) {
      years.push(currentYear);
      currentYear++;
    }
    return years;
  };

  // Place holder values for filter input fields

  const [filterDayPlaceHolderTxt, setFilterDayPlaceHolderTxt] = useState(
    "Please select a day"
  );

  const [filterWeekPlaceHolderTxt, setFilterWeekPlaceHolderTxt] = useState(
    "Please select a week"
  );
  const [filterMonthPlaceHolderTxt, setFilterMonthPlaceHolderTxt] = useState(
    "Please select a month"
  );
  const [filterYearPlaceHolderTxt, setFilterYearPlaceHolderTxt] = useState(
    "Please select a year"
  );

  // close button function - clears all the date values
  const clearFilterValues = () => {
    setActiveFilter({
      type: "",
      value: "",
    });
  };

  // Active filter logic to select only one filter
  const [activeFilter, setActiveFilter] = useState({
    type: "", // day week month year
    value: "", // specific value
  });

  const handleFilterChange = (type, value) => {
    setActiveFilter({ type, value });
  };

  const fetchActiveFilterDate = (dateType, dateValue) => {
    props.fetchActiveFilterDate(dateType, dateValue);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning mx-3 my-3 filterBtn"
        data-toggle="modal"
        data-target="#filterModal"
        style={{ color: "white" }}
      >
        Filter Expense
      </button>
      <div
        className="modal fade"
        id="filterModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <b>Filter Expenses</b>
              </h5>
              <button
                type="button"
                onClick={clearFilterValues}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p
                className="filterModalTxt d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                Filter by Day
                <input
                  type="text"
                  className="filterInputField filterByDay"
                  onChange={(event) => {
                    handleFilterChange("day", event.target.value);
                  }}
                  placeholder={filterDayPlaceHolderTxt}
                  value={activeFilter.type === "day" ? activeFilter.value : ""}
                  onFocus={(event) => {
                    event.target.type = "date";
                  }}
                  onBlur={(event) => {
                    event.target.type = "text";
                  }}
                  style={{ border: "1px solid black" }}
                />
              </p>
              <hr />
              <p
                className="filterModalTxt d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                Filter by Week
                <select
                  id="week-selector"
                  className="filterInputField filterByWeek"
                  onChange={(event) =>
                    handleFilterChange("week", event.target.value)
                  }
                  value={activeFilter.type === "week" ? activeFilter.value : ""}
                  placeholder={filterWeekPlaceHolderTxt}
                  style={{ border: "1px solid black" }}
                >
                  <option value="" hidden>
                    {filterWeekPlaceHolderTxt}
                  </option>
                  {/* Populate weeks dynamically */}
                  {weeksForCurrentMonth.map((week, index) => (
                    <option key={index} value={`${week.start} - ${week.end}`}>
                      {`${week.start} - ${week.end}`}
                    </option>
                  ))}
                </select>
              </p>
              <hr />
              <p
                className="filterModalTxt d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                Filter by Month
                <select
                  id="month-selector"
                  className="filterInputField filterByMonth"
                  onChange={(event) => {
                    handleFilterChange("month", event.target.value);
                  }}
                  value={
                    activeFilter.type === "month" ? activeFilter.value : ""
                  }
                  placeholder={filterMonthPlaceHolderTxt}
                  style={{ border: "1px solid black" }}
                >
                  <option value="" hidden>
                    Please select a month
                  </option>
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6">July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
              </p>
              <hr />
              <p
                className="filterModalTxt d-flex justify-content-between"
                style={{ fontWeight: 500 }}
              >
                Filter by Year
                <select
                  id="year-selector"
                  className="filterInputField filterByYear"
                  onChange={(event) => {
                    handleFilterChange("year", event.target.value);
                  }}
                  value={activeFilter.type === "year" ? activeFilter.value : ""}
                  placeholder={filterYearPlaceHolderTxt}
                  style={{ border: "1px solid black" }}
                >
                  <option value="" hidden>
                    Please select a year
                  </option>
                  {/* Populate years dynamically */}
                  {yearsForFilterSelection().map((years, index) => (
                    <option key={index} value={`${years}`}>
                      {`${years}`}
                    </option>
                  ))}
                </select>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={clearFilterValues}
              >
                Close
              </button>
              <button
                type="button"
                data-dismiss="modal"
                className="btn btn-success"
                onClick={() => {
                  fetchActiveFilterDate(activeFilter.type, activeFilter.value);
                }}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}