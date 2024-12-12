import React, { useState } from "react";
import "./index.css";

const LoginPage = () => {
  const [fullName, setFullName] = useState({
    userName: "",
    email: "",
    password: "",
    re_password: ""
  });

  const InputEvent = (event) => {
    const { value, name } = event.target;

    setFullName((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <div className="container">
      <div className="center_container">
        <div className="leftContainer">
          <div className="details">
            <h1>Welcome Back</h1>
            <p className="para">To Keep connected with us please login with your personal info</p>
            <button className="signIn">SIGN IN</button>
          </div>
          
        </div>

        <div className="rightContainer">
          <form onSubmit={onSubmit}>
            <div className="topHeading">
              <h1 className="heading">CREATE ACCOUNT</h1>
            </div>
            <input
              type="text"
              className="input_type"
              name="userName"
              placeholder=" Name"
              value={fullName.userName}
              onChange={InputEvent}
            />
            <br />

            <input
              type="text"
              className="input_type"
              name="company"
              placeholder="Company"
              value={fullName.company}
              onChange={InputEvent}
            />
            <br />

            <input
              type="text"
              value={fullName.email}
              className="input_type"
              name="email"
              placeholder="Gmail"
              onChange={InputEvent}
            />
            <br />

            <input
              type="text"
              value={fullName.password}
              className="input_type"
              name="password"
              placeholder="Password"
              onChange={InputEvent}
            />
            <br />

            <input
              type="password"
              value={fullName.re_password}
              className="input_type"
              name="re_password"
              placeholder="Confirm - Password"
              onChange={InputEvent}
            />
            <br />

            <div className="register">
              <button className="button">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
