import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { startLogged } from "../store/slices/login/loginSlice";

export const Login = () => {

  const {isLogged} = useSelector(state => state.login);
  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (formValue) => {
      localStorage.setItem("auth", JSON.stringify({username: "admin", password:"admin"}))
      const loggedUser = JSON.parse(localStorage.getItem("auth"))
      if(formValue.username === loggedUser.username && formValue.password === loggedUser.password) {
        localStorage.setItem("loggedin", true)
        dispatch(startLogged({isLogged: true, isLogout: false}))
      } else {
        dispatch(startLogged({isLogged: false}))
        Swal.fire("Error", "Usuario o Contraseña incorrectos", "error");
      }
    }
  })

  if(isLogged){
    return <Navigate to="/home" />
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "999px" }}
    >
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <h1>Enerbit</h1>
          </div>
          <div style={{margin:"20px"}}>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="Username"
            />
            {formik.errors.username ? (
              <div style={{ color: "red" }}>
                <p>Please enter your username*</p>
              </div>
            ) : null}
          </div>
          <div style={{margin:"20px"}}>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            {formik.errors.password ? (
              <div style={{ color: "red" }}>
                <p>Please enter your password*</p>
              </div>
            ) : null}
          </div>
          <div className="d-flex justify-content-center" style={{margin:"10px"}}>
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
