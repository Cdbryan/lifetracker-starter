import * as React from "react";
import "./Login.css";

export default function () {
  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>
        <br />
        <div className="form">
          <div className="input-field">
            <label className="Label" for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value=""
            />
          </div>
          <div className="input-field">
            <label className="Label" for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value=""
            />
          </div>
          <button className="btn">Login</button>
        </div>
        <div className="footer">
          <p>
            Don't have an account? Sign up <a href="/register">here.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
