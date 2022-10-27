import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './styles/loginScreen.css'

const LoginScreen = () => {
  const { handleSubmit, register, reset } = useForm();
  const [isLogged, setIsLogged] = useState(false)

  const submit = (data) => {
    const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if(isLogged) {
    return (
      <div className="isLogged-container">
        <h2 className="isLogged__title">User Logged</h2>
        <button className="isLogged__btn" onClick={handleLogout}>Logout</button>
      </div>
    )
  }


  return (
    <div className="login-container">
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <div className="login__email-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" {...register("email")} />
        </div>
        <div className="login__password-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            {...register("password")}
          />
        </div>
        <button className="isLogged__btn">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
