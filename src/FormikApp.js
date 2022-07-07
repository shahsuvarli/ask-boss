import { useFormik } from "formik";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FormikApp() {
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      partner: "",
      location: "",
      reason: "",
      departureTime: "",
      arrivalTime: "",
      delayExcuse: "",
    },
    onSubmit: () => {
      emailjs
        .sendForm(
          "SERVICE_ID",
          "TEMPLATE_ID",
          form.current,
          "USER_ID"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <div>
      <form
        ref={form}
        onSubmit={(e) => formik.handleSubmit(e)}
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
        }}
      >
        <label htmlFor="firstName">First name</label>
        <input
          type="name"
          id="firstName"
          name="firstName"
          placeholder="First name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="name"
          id="lastName"
          placeholder="Last name"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="partner">Partner</label>
        <input
          id="partner"
          placeholder="Partner"
          name="partner"
          onChange={formik.handleChange}
          value={formik.values.partner}
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          placeholder="Location"
          name="location"
          onChange={formik.handleChange}
          value={formik.values.location}
        />
        <label htmlFor="reason">Reason</label>
        <input
          id="reason"
          placeholder="Reason"
          name="reason"
          onChange={formik.handleChange}
          value={formik.values.reason}
        />
        <label htmlFor="departureTime">Departure time</label>
        <input
          id="departureTime"
          name="departureTime"
          type="time"
          placeholder="Departure time"
          onChange={formik.handleChange}
          value={formik.values.departureTime}
        />
        <label htmlFor="arrivalTime">Arrival time</label>
        <input
          id="arrivalTime"
          name="arrivalTime"
          type="time"
          placeholder="Arrival time"
          onChange={formik.handleChange}
          value={formik.values.arrivalTime}
        />
        <label htmlFor="delayExcuse">Delay excuse</label>
        <input
          id="delayExcuse"
          name="delayExcuse"
          placeholder="Delay excuse"
          onChange={formik.handleChange}
          value={formik.values.delayExcuse}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
