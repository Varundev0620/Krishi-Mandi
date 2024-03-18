import React from 'react'
import './BlogScreen.css'
import logo from './profit_cal_bg.png'

const BlogScreen = () => {
  return (
    <>
      <div class="BlogScreen">

<div class="Blogtext">
    <h1 style={{color:'greenyellow'}}>
        Blog Screen
    </h1>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim dolorem accusamus sed ratione aperiam esse cumque, laudantium aliquid quod quisquam eaque ea dolorum ducimus architecto voluptas eveniet. Incidunt, excepturi hic.</p>
</div>
<hr/>

<div class="BlogImages">
    <div class="Blog">
        <img src={logo} alt=""/>
        <h5>Blog1</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt sapiente quo </p>
    </div>
    <div class="Blog">
        <img src={logo} alt=""/>
        <h5>Blog2</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sunt sapiente quo </p>

    </div>
</div>


</div>
    </>
  )
}

export default BlogScreen
