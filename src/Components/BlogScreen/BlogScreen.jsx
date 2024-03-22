import React from 'react'
import './BlogScreen.css'
import logo from './profit_cal_bg.png'
function BlogScreen() {
  return (
    <div>
      {/* <!-- Blog section --> */}

<section id ="blog">

    {/* <!-- heading --> */}
    <div class="blog-heading">
        {/* <!-- <span>My Recent Posts</span> --> */}
        <h3> Krishi Mandi Blogs :</h3>

    </div>

    <hr/>


    {/* <!-- blog-container --> */}
     <div class="blog-container">

        <div class="blog-box">
            <div class="blog-img">
                <img src={logo} alt="Blog"/>
            </div>

            <div class="blog-text">
                <span> 22-March-2024</span>
                
                <a href="#" class="blog-title"> What happened Ideas?   </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non adipisci consequuntur obcaecati illo molestiae laudantium fugit nesciunt reiciendis ducimus! Soluta quibusdam tempore quo asperiores ea. Fugiat porro praesentium qui.</p>
                <a href="#">Read more</a>
            </div>
        </div>


        <div class="blog-box">
            <div class="blog-img">
                <img src={logo} alt="Blog"/>
            </div>

            <div class="blog-text">
                <span> 22-March-2024</span>
                
                <a href="#" class="blog-title"> What happened Ideas?   </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non adipisci consequuntur obcaecati illo molestiae laudantium fugit nesciunt reiciendis ducimus! Soluta quibusdam tempore quo asperiores ea. Fugiat porro praesentium qui.</p>
                <a href="#">Read more</a>
            </div>
        </div>

        <div class="blog-box">
            <div class="blog-img">
                <img src={logo} alt="Blog"/>
            </div>

            <div class="blog-text">
                <span> 22-March-2024</span>
                
                <a href="#" class="blog-title"> What happened Ideas?   </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum non adipisci consequuntur obcaecati illo molestiae laudantium fugit nesciunt reiciendis ducimus! Soluta quibusdam tempore quo asperiores ea. Fugiat porro praesentium qui.</p>
                <a href="#">Read more</a>
            </div>
        </div>

        

     </div>


</section>


    </div>
  )
}

export default BlogScreen
