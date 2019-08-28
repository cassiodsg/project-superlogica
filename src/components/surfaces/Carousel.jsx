import React from "react";
import { Carousel } from "react-responsive-carousel";
import weatherDay from '../../assets/images/weather-01.jpg';
import weatherNight from '../../assets/images/weather-02.jpg';

export default props => 
  <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
    <div>
      <img src={weatherDay} alt="Weather" />
    </div>
    <div>
      <img src={weatherNight} alt="Weather" />
    </div>
    
  </Carousel>
