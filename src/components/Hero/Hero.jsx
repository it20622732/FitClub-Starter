import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header/>
  {/*the best ad*/}
            <div className='the-best-ad'>
              <div></div>
              <span>the best fitness club in the town</span>
            </div>
  {/*Hero heading*/}
            <div className='hero-text'>
              <div>
                <span className='stroke-text'>Shape </span>
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
            <div className='figures'>
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
        </div>
        <div className='right-h'> right

        </div>

    </div>
  )
}

export default Hero
