import React from 'react'
import '../styles/Home.css'
import Pizza from "../assets/pizza.jpeg"
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Pizza})`}}>
    <div className='headerContainer' >
<h1>
    Joumana's Pizzeria
</h1>
<p> PIZZA FOR EVERYONE</p>
<Link to="/menu">
<button> ORDER NOW</button>
</Link>
    </div>
    </div>
  )
}

export default Home
