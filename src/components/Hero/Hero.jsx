import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';


const Hero = () => {
  const transition = {type: 'spring', duration : 3}

  return (
    <div className="hero">
      <div className='blur hero-blur'></div>
        <div className="left-h">
            <Header/>
                {/*the best ad*/}
            <div className="the-best-ad">
              <motion.div>
                initial= {{left:'238px'}}
                whileInView = {{left: '8px'}}
                transition = {{...transition, type : 'tween'}}

              </motion.div>
              <span>the best fitness club in the town</span>
            </div>
                {/*Hero heading*/}
            <div className="hero-text">
              <div>
                <span className="stroke-text">Shape </span>
                <span>You</span>
              </div>
              <div>
                <span>Ideal Body </span>
              </div>
              <div>
                <span>
                  We will help to shape and build your ideal body and live up your life to fullest
                </span>
              </div>
            </div>
            {/*figures*/}
            <div className="figures">
              <div>
                <span>+140</span>
                <span>Expert Coachs</span>
              </div>
              <div>
                <span>+978</span>
                <span>Members joined</span>
              </div>
              <div>
                <span>56</span>
                <span>Fitness Programs</span>
              </div>
            </div>
            {/* hero button*/}
            <div className="hero-button">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
        </div>
        <div className="right-h"> 
          <button className='btn'>Join Now</button>

          <div className="heart-rate">
            <img src={heart} alt=''/>
            <span>Heart Rate </span>
            <span>116 bpm </span>
          </div>

          {/*hero images*/}
          <img src={hero_image} alt='' className="hero-image"/>
          <img src={hero_image_back} alt='' className="hero-image-back"/>
          
          {/*Calories*/}
          < div className="Calories">
              <img src={Calories} alt=''/>
          </div>
            <div>
              <span> Calories Burned </span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>

  )
};

export default Hero;
