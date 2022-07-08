import { Action } from "history";
import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const handlesubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };
  return (
    <div className="container d-flex justify-content-center w-25 rounded-3 bg-black ">
      <div className="form">
        <form onSubmit={handlesubmit}>
          <div className="input-container ">
            <label> E - mail </label>{" "}
            <input
              type="text"
              name="uname"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>{" "}
          <div className="input-container">
            <label> Password </label>{" "}
            <input
              type="password"
              name="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>{" "}
          <div className="button-container">
            <input type="submit" />
          </div>{" "}
        </form>
      </div>{" "}
    </div>
  );
};
