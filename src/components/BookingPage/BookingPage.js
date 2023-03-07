import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm"
import seating_chart from "./seating_chart.jpg"

const BookingPage = (props) => {   
  return (
    <div className="fullwidth_container2">
        <div>
            <img src={seating_chart} alt="Seating Chart" />
        </div>
        <div id="reservation_container">
            <div>
                <h2>Reserve a Table</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <BookingForm times={props.times} updateTimes={props.updateTimes} submit={props.submit} />
        </div>
    </div>
  );
}

export default BookingPage;