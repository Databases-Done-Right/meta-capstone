import { useEffect, useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

const validate = values => {
    const errors = {};
    if (!values.dateDay) {
      errors.dateDay = 'Required';
    }
    if (!values.dateTime) {
      errors.dateTime = 'Required';
    }
    if (!values.guestQty) {
      errors.guestQty = 'Required';
    }
    if (!values.tableNumber) {
        errors.tableNumber = 'Required';
    }
    return errors;
  };

  const BookingForm = (props) => {
    const {updateTimes} = props;
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const listTimes = props.times.map((time) =>
      <option key={time} value={time}>{time}</option>
    );
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        dateDay: '',
        dateTime: '',
        guestQty: '',
        ocassion: '',
        tableNumber: '',
      },
      validationSchema: Yup.object({
        dateDay: Yup.string().required("When were you thinking?"),
        dateTime: Yup.string().required("What time would you like?"),
        guestQty: Yup.string().required("How many are attending?"),
        //ocassion: Yup.string().required("Are we celebrating a special event with you?"),
      }),
      onSubmit: values => {
        props.submit(JSON.stringify(values, null, 2));
        //alert(JSON.stringify(values, null, 2));
      },
    });

    useEffect(() => {
      console.log(formik.touched.guestQty);
      updateTimes(formik.values.dateDay);
    }, [formik.values.dateDay]);

    return (
      <form onSubmit={formik.handleSubmit} id="tfn__reservations" aria-label="Table Booking Form">
        <div>
          <label htmlFor="dateDay" for="dateDay">Date</label>
          <input
            id="dateDay"
            name="dateDay"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dateDay}
            value2={formik.touched.dateDay}
            aria-label="What date are you interested in booking for?"
          />
          {formik.errors.dateDay && formik.touched.dateDay ? <div>{formik.errors.dateDay}</div> : null}
        </div>
        <div>
          <label htmlFor="dateTime" for="dateTime">Time</label>
          <select
            id="dateTime"
            name="dateTime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateTime}
            aria-label="What time are you interested in booking for?"
          ><option value=""></option>{listTimes}
          </select>
          {formik.errors.dateTime && formik.touched.dateTime ? <div>{formik.errors.dateTime}</div> : null}
        </div>
        <div>
          <label htmlFor="guestQty" for="guestQty"># of Guests</label>
          <input
            id="guestQty"
            name="guestQty"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.guestQty}
            min="1"
            max="16"
            aria-label="How many will be dining?"
          />
          {formik.errors.guestQty && formik.touched.guestQty ? <div>{formik.errors.guestQty}</div> : null}
        </div>
        <div>
          <label htmlFor="ocassion" for="ocassion">Ocassion</label>
          <select
            id="ocassion"
            name="ocassion"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ocassion}
            aria-label="Is this a special ocassion?"
          >
            <option value="Hungry" aria-label="Nothing special, I'm just hungry!">Just Hungry</option>
            <option value="Birthday" aria-label="We are celebrating a birthday!">Birthday</option>
            <option value="Anniversary" aria-label="We are celebrating an anniversary!">Anniversary</option>
          </select>
          {formik.errors.ocassion && formik.touched.ocassion ? <div>{formik.errors.ocassion}</div> : null}
        </div>
        <div>
          <label htmlFor="tableNumber" for="tableNumber">Table #</label>
          <input
            id="tableNumber"
            name="tableNumber"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tableNumber}
            min="1"
            max="12"
            aria-label="Do you have a table preference?"
          />
          {formik.errors.tableNumber && formik.touched.tableNumber ? <div>{formik.errors.tableNumber}</div> : null}
        </div>
        <div><button className="cta_button" type="submit" disabled={!formik.isValid} aria-label="Submit Booking">Continue</button></div>
      </form>
    );
  };

  export default BookingForm;