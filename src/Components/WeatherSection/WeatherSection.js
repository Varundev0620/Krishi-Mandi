
import './WeatherSection.css';
import rain from './rain.png';


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api ={


   key :"e0da1ce5fc2c3a1325e3a64f3ec2d57c",
   base :"https://api.openweathermap.org/data/2.5/",
   
};




const Weather = () => {

   const [search, setSearch]=useState("");
   const [weather,setWeather]=useState({});

   const searchpressed = () =>{
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res)=> res.json())
      .then((result)=>{
         setWeather(result);
      });
   };
  

  return (

   <>
      <div class='weathercontainer'>
          
            {/* Search Box */}
          <div class='searchbox' >  
                  <input  type='text' placeholder='Enter your City'  onChange={(e)=> setSearch(e.target.value)} />
                         <button onClick={searchpressed}  >Search</button>
          </div>
          {typeof weather.main!="undefined" ? (
          <div class='weatherbox' >

                  <div class='box1' >
                      {/* <div class='image'> 
                      <img src={rain} width="100px"   ></img>
                        </div> */}
                      
                  </div>
                  
                  <div class='box2' >

                     <div class='ForecastDetails' > <h3>Forecast Details</h3></div>
                     <div class='Details' > Weather :   {weather.name}   </div>
                     <div class='Details' > Temparature :   {weather.main.temp}</div>
                     <div class='Details' > Conditions :{weather.weather[0].main}</div>
                     <div class='Details' > Description :{weather.weather[0].description}</div>

                  </div>
                     

          </div>
          ) : ("" )};  

          
      </div>
   </>
    
  );
};

export default Weather;
