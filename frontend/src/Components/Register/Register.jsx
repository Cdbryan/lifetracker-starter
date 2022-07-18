import * as React from "react";
import "./Register.css";
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import apiClient from "../../../services/apiClient";

export default function Register({setUser}) {
  // const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const navigate = useNavigate()

  // useEffect(() => {
  //   // if user is already logged in,
  //   // redirect them to the home page
  //   if (user?.email) {
  //     navigate("/")
  //   }
  // }, [user, navigate])

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    if (event.target.name === "passwordConfirm") {
      if (event.target.value !== form.password) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsProcessing(true)
    setErrors((e) => ({ ...e, form: null }))

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      setIsProcessing(false)
      return
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    try {
      const res = await apiClient.signupUser({
        name: form.name,
        email: form.email,
        username: form.username, 
        password: form.password,
        firstname: form.firstName,
        lastname: form.lastName
      })
      if (res?.data?.user) {
        setUser(res.data.user)
        apiClient.setToken(res?.data?.token)
        navigate("/activity")
      } else {
        setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
      }
    } catch (err) {
      console.log(err)
      const message = err?.response?.data?.error?.message
      setErrors((e) => ({ ...e, form: message ?? String(err) }))
    } finally {
      setIsProcessing(false)
    }
  }
  
  return (
    <div className="Register">
      <div className="card">
        <h2>Register</h2>
        <br />
        <div className="form">
          <div className="input-field">
            <label >Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
              onChange={handleOnInputChange}
            />
          </div>
          <div className="input-field">
            <label >Username</label>
            <input
              type="text"
              name="username"
              placeholder="your_username"
              onChange={handleOnInputChange}
            />
          </div>
          <div className="split-input-field">
            <div className="input-field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleOnInputChange}
              />
            </div>
            <div className="input-field" >
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleOnInputChange}
            />
          </div>
        </div>
        <div className="input-field">
          <label >Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a secure password"
            onChange={handleOnInputChange}
          />
        </div>
        <div className="input-field">
          <label >Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm your password"
            onChange={handleOnInputChange}
          />
        </div>
        <button className="btn" onClick={handleOnSubmit}> Create Account</button>
      </div>
      <div className="footer">
        <p>
          Already have an account? Login <a href="/login">here</a>
        </p>
      </div>
      </div>
    </div>
  );
}
