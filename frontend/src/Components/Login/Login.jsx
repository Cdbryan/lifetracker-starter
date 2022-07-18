import * as React from "react";
import "./Login.css";
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import apiClient from "../../../services/apiClient";

export default function Login({setUser}) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsProcessing(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const res = await apiClient.loginUser(form)
      if (res?.data?.user) {
        setUser(res.data.user)
        apiClient.setToken(res?.data?.token)
        console.log(res.data.token)
        navigate("/activity")
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
      }
    } catch (err) {
      console.log(err)
      setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
    } finally {
      setIsProcessing(false)
    }
  }

  
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
              onChange={handleOnInputChange}
            />
          </div>
          <div className="input-field">
            <label className="Label" for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleOnInputChange}
            />
          </div>
          <button className="btn" onClick={handleOnSubmit}>Login</button>
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
