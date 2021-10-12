import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "../../Button";

const Form = (props) => {
  const getMovieName = props.results.map(({ show }) => show.name);
  const [submitted, setSubmitted] = useState(false);
  const validate = (values) => {
    const errors = {};
    if (!values.movieName) {
      errors.movieName = "Required";
    }
    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length < 2) {
      errors.userName = "Must have more than 2 characters or more";
    }

    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      movieName: getMovieName[0],
      email: "",
      userName: "",
    },

    validate,

    onSubmit: (values) => {
      localStorage.setItem("bookingDetails", JSON.stringify(values));
      setSubmitted(true);
    },
  });

  return (
    <div className="fixed top-0 left-0 text-gray-100  w-full p-2 h-screen bg-transparent backdrop-blur-md flex justify-center items-center">
      <div className="absolute z-500 sm:w-auto md:w-5/12 h-4/6 bg-gray-900  m-auto rounded flex justify-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center">
          <div className="flex flex-col m-2">
            <label htmlFor="movieName" className=" w-64  text-left	font-bold  ">
              Movie Name
            </label>

            <input type="text" name="movieName" id="movieName" className="w-64 p-2 text-gray-800" onChange={formik.handleChange} value={formik.values.movieName} />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="userName" className=" w-64  text-left font-bold  ">
              User Name
              {formik.errors.userName ? <p className="font-thin text-sm text-red-600 my-2">{formik.errors.userName}</p> : null}
            </label>
            <input type="text" name="userName" id="userName" className="w-64 p-2 text-gray-800" onChange={formik.handleChange} value={formik.values.userName} />
          </div>
          <div className="flex flex-col m-2">
            <label htmlFor="email" className=" w-64  text-left font-bold  ">
              Email
              {formik.errors.email ? <p className="font-thin text-sm text-red-600 my-2">{formik.errors.email}</p> : null}
            </label>
            <input type="text" name="email" id="email" className="w-64 p-2 text-gray-800" onChange={formik.handleChange} value={formik.values.email} />
          </div>

          <Button type="submit">{submitted ? "Submitted" : "Submit"}</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
