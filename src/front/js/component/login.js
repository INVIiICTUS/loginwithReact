import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Login = () => {
  return (
    <div className="container-fluid ">
      <div className="form">
        <div className="input-container ">
          <label>E-mail </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </div>
    </div>
  );
};
