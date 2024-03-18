import React from 'react'
import './WeatherSection.css'
const WeatherSection = () => {
  return (
    <>
     <div class="WeatherSection">
        <div class="WeatherData">
            <div class="CurrentLocation">
               <h2>Your Current Location Weather &nbsp;: </h2> 
            </div>
            
            <div class="WeatherTempDetails">

                <div class="WeatherTemp">
                   <img src="./WeatherImage.gif" alt=""/>
                   <h5>Location</h5>
                   <h1>30 C</h1>
                   <h5>Condition</h5>
                </div>
                <div class="WeatherDetails">
                   {/* <Table border="1">
                    <th>Forecast Deatails</th>
                    
                    <td>row1</td>
                    <td>row1</td>
                    <td>row1</td>
                   </Table> */}
                </div>
            </div>



        </div>
     </div>
    </>
  )
}

export default WeatherSection
