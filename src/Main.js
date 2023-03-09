import HomepageHero from "./HomepageHero"
import React, { useEffect, useState, useReducer } from "react";
import HomePage from "./HomePage"
import Specials from "./components/Specials/Specials"
import Testimonials from "./components/Testimonials/Testimonials"
import ConfirmedBooking from "./components/ConfirmedBooking/ConfirmedBooking"
import Backstory from "./components/Backstory/Backstory"
import BookingPage from "./components/BookingPage/BookingPage"
import SimpleHeader from "./components/SimpleHeader/SimpleHeader"
import { Routes, Route } from "react-router-dom";
import { fetchAPI, submitAPI } from "./components/BookingPage/BookingAPI";

const submitForm = (formData) => {
    if(submitAPI(formData)) {
        console.log('aaa');
        window.location.replace('/confirmed');
    }
   //console.log(formData);
}

const updateTimes = (date) => {
    //console.log('bbb');
    //console.log('*',date);
    const date2 = new Date();
    date2.setDate(date2.getDate() + Math.floor(Math.random() * 14));
    const new_times = fetchAPI(date2);
    //console.log(new_times);
    return new_times;
}

const initialiazeTimes = fetchAPI(new Date());

const Main = () => {
    //const theDates = fetchAPI(new Date());
    //const [availableTimes, setAvailableTimes] = useReducer(updateTimes, ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initialiazeTimes);

    return (
      <main>
        <Routes>
          <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/reservations" element={<BookingPage times={availableTimes} updateTimes={setAvailableTimes} submit={submitForm} />}></Route>
          <Route path="/menu" element={<><SimpleHeader title="Our Specials" /><Specials /></>}></Route>
          <Route path="/order" element={<><SimpleHeader title="Order Online" /><Specials /></>}></Route>
          <Route path="/testimonials" element={<><SimpleHeader title="What Our Customers Are Saying" /><Testimonials /></>}></Route>
          <Route path="/about" element={<Backstory />}></Route>
        </Routes>
      </main>
    );
  }
  
  export default Main;