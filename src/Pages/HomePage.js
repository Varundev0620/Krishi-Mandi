import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/SliderImage/Header';
import WeatherSection from '../Components/WeatherSection/WeatherSection';
import BlogScreen from '../Components/BlogScreen/BlogScreen';
import Footer from '../Components/Footer/Footer';
import CropSection from '../Components/CropSection/CropSection';


const HomePage = () => {
  return (
    <>
    
    <Navbar/>
    <Header/>
    <WeatherSection/>
    <CropSection/>
    <BlogScreen/>
    <Footer/>

    
    </>
  )
}

export default HomePage
