import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

class Signup extends React.Component {
  state = {
    password: "",
    name: "",
    email: ""
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={values => {
          this.props.onSignup(values);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
      >
        {props => {
          const { values, touched, errors, handleChange, handleSubmit } = props;
          return (
            <div className="login-wrap">
              <h2>Sign Up</h2>

              <div className="form">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={errors.name && touched.name && "error"}
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <button type="submit" onClick={handleSubmit}>
                  Sign up
                </button>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
}

export default Signup;
