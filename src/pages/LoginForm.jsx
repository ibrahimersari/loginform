import React from 'react'
import "../css/loginform.css";
import {Link } from "react-router-dom"
import Logo from "../logo.png"


function LoginForm() {
    const textInput = React.createRef();
    function handleSubmit(e) 
        {
            e.preventDefault();
            let email = textInput.current.value
            window.location.href="/login";
            window.localStorage.setItem("email", email);
        }
  return (
    <div class="login-card-contaianer">
        <div class="login-card">
            <div class="login-card-logo">
                <img src={Logo} alt="logo"/>
            </div>
            <div class="login-card-header">
                <h1>Sign In</h1>
                <div>Please login to use platform</div>
            </div>
            <form class="login-card-form" onSubmit={handleSubmit}>
                <div class="form-item">
                    <span class="form-item-icon material-symbols-rounded">Email</span>
                    <input ref={textInput} type="email" placeholder="Enter Email" required autofocus/>
                </div>
                <div class="form-item">
                    <span class="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" placeholder="Enter Password" required/>
                </div>
                <div class="form-item-other">
                    <div class="checkbox">
                        <input type="checkbox" id="rememberMeCheckbox"/>
                        <label for="rememberMeCheckbox">Remember me</label>
                    </div>
                    <Link to="/">I forgot my password!</Link>
                </div>
                <button type='submit'>Sign In</button>
            </form>
            <div class="login-card-footer">
                Don't have an account! <Link to="/">Create a new account</Link>.
            </div>
        </div>
        <div class="login-card-social">
            <div>Other Sign-in Platform</div>
            <div class="login-card-social-btn">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                     </svg>
                </Link>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                     </svg>
                </Link>
            </div>
        </div>
    </div>

  )
}

export default LoginForm
