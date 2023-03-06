import { useFormik } from "formik";
import * as Yup from "yup";
import DatePickerField from "./DatePickerField"

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
  
  const SignupForm = () => {
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
      initialValues: {
        dateDay: '2023-03-21',
        dateTime: '17:30',
        guestQty: '4',
        tableNumber: '5',
      },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit} id="tfn__reservations">
        <div>
          <label htmlFor="dateDay">Date</label>
          <input
            id="dateDay"
            name="dateDay"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.dateDay}
          />
          {formik.errors.dateDay ? <div>{formik.errors.dateDay}</div> : null}
        </div>
        <div>
          <label htmlFor="dateTime">Time</label>
          <input
            id="dateTime"
            name="dateTime"
            type="time"
            onChange={formik.handleChange}
            value={formik.values.dateTime}
          />
          {formik.errors.dateDay ? <div>{formik.errors.dateDay}</div> : null}
        </div>
        <div>
          <label htmlFor="guestQty"># of Guests</label>
          <input
            id="guestQty"
            name="guestQty"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.guestQty}
            min="1"
            max="16"
          />
          {formik.errors.dateDay ? <div>{formik.errors.dateDay}</div> : null}
        </div>
        <div>
          <label htmlFor="tableNumber">Table #</label>
          <input
            id="tableNumber"
            name="tableNumber"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.tableNumber}
            min="1"
            max="12"
          />
          {formik.errors.dateDay ? <div>{formik.errors.dateDay}</div> : null}
        </div>
        <div><button className="cta_button" type="submit">Continue</button></div>
      </form>
    );
  };

  export default SignupForm;