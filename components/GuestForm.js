import React from 'react';
import { Formik, ErrorMessage  } from 'formik';
import Router from 'next/router'

const divStyle = {
  margin: '10px'
};

const errorMessage = {
  width: '100%',
  color: 'red',
  margin: '0px 0px 15px 0px',
  fontFamily: 'Arial'
}

const Basic = (props) => (
  <div style={divStyle}>
    <Formik
      initialValues={{ fullname: '', message: '' }}
      validate={values => {
        let errors = {};
        if (!values.fullname) {
          errors.fullname = 'Required';
        }
        if (!values.message) {
          errors.message = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.handleSubmit(values).then(function(response) {
          setSubmitting(false);
          Router.push(`/guestbook`)
        })
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your full name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullname}
          />
          <ErrorMessage component="div" name="fullname" style={errorMessage}/>
          <label htmlFor="fullname">Message</label>
          <input
            type="text"
            name="message"
            placeholder="Enter a message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <ErrorMessage component="div" name="message" style={errorMessage}/>
          <input type="submit" value="Submit" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
    <style jsx>{`
      .error-messages {
        width: 100%;
        color: red;
      }

      input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }

      input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      input[type=submit]:hover {
        background-color: #45a049;
      }

      .simple-form {
        display: flex;
        overflow-y: scroll;
        padding-bottom: 1.25rem;
      }

      .simple-form input {
        margin: 0 .25rem;
        min-width: 125px;
        border: 1px solid #eee;
        border-left: 3px solid;
        border-radius: 5px;
        transition: border-color .5s ease-out;
      }

      .simple-form input:optional {
        border-left-color: #999;
      }

      .simple-form input:required {
        border-left-color: palegreen;
      }

      .simple-form input:invalid {
        border-left-color: salmon;
      }

      div {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        width: '100%',
        marginTop: '10px'
      }

      h1, a {
        font-family: "Arial";
      }

      label {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default Basic;
