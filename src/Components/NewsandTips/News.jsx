import React from 'react'
import './News.css'

function News() {
  return (
    <div class='News-conatiner'>
           

<div class="wrapper">
    <i id="left" class="fa-solid fa-angle-left"></i>
    <ul class="carousel">
      <li class="card">
        <div class="img"><img src="images/img-1.jpg" alt="img" draggable="false"/></div>
        <h2>Blanche Pearson</h2>
        
        <span>  reiciendis veritatisit </span>
        
      </li>
      <li class="card">
        <div class="img"><img src="images/img-2.jpg" alt="img" draggable="false"/></div>
        <h2>Joenas Brauers</h2>
        <span>Web Developer</span>
      </li>
      <li class="card">
        <div class="img"><img src="images/img-3.jpg" alt="img" draggable="false"/></div>
        <h2>Lariach French</h2>
        <span>Online Teacher</span>
      </li>
      <li class="card">
        <div class="img"><img src="images/img-4.jpg" alt="img" draggable="false"/></div>
        <h2>James Khosravi</h2>
        <span>Freelancer</span>
      </li>
      <li class="card">
        <div class="img"><img src="images/img-5.jpg" alt="img" draggable="false"/></div>
        <h2>Kristina Zasiadko</h2>
        <span>Bank Manager</span>
      </li>
      <li class="card">
        <div class="img"><img src="images/img-6.jpg" alt="img" draggable="false"/></div>
        <h2>Donald Horton</h2>
        <span>App Designer</span>
      </li>
    </ul>
    <i id="right" class="fa-solid fa-angle-right"></i>
  </div>


  

    </div>
  )
}

export default News

