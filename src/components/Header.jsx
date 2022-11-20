import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link className="headerLink" to="/">
        Login Form
      </Link>
      <Link className="headerLink" to="/login">
        Login
      </Link>
    </div>
  )
}

export default Header
