import React from 'react'
import {Link} from "react-router-dom"
function Login() {
  const email = window.localStorage.getItem("email")
  return (
    <div>
      Giriş yapılan hesap {email}<br/>
      <Link to="/">Çıkış yap</Link>
    </div>
  )
}

export default Login
