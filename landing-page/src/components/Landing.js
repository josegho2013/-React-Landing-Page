import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/landing.css"


const Landing = () => {
  return (
    <div className="imagen" >
  <h1 className=" titulo"> Welcome to my Portfolio</h1>
    <Link to="/about" >
      <button className="button">Let´s Go!</button>
      </Link>


        
    </div>
  )
}

export default Landing