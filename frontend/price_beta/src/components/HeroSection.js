import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import heroimg from '../assets/images/hero-img.png'
import { MdOutlineCheckCircle } from 'react-icons/md';
import circle from '../assets/images/plain header.png';


const HeroSection = () => {
  return (
    <HeroContainer>
    <div className='hero'>
        <div className='hero_text'>
        <h1>All Product Prices in One Place</h1>
        <p><MdOutlineCheckCircle className='check_circle'/>Wide range prices</p>
        <p><MdOutlineCheckCircle className='check_circle'/>Coupon price sourcing</p>
        <p><MdOutlineCheckCircle className='check_circle'/>Quality description</p>
        <p><MdOutlineCheckCircle className='check_circle'/>Discount Deals</p>
        </div>

        <Link to='/'>
        <button type='button' className='btn hero_btn'>Get Started</button>
        </Link>
    </div>

    <div>
        <img src={heroimg} alt="hero" />
        <img src={circle} alt="circle" className='circle' />
        
    </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
    border: 1px solid var(--clr-primaryOrange4);
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-item: center;
    padding: 68px 65px 0 66px;
    margin-top: 48px;  
    
    .hero {
      margin-top: 105px; 
    

    .hero_text {
      background: var(--clr-secondaryOrange);
      padding: 30px 57px;
      margin-bottom: 23px;
      filter: drop-shadow(0 0 2rem var(--clr-secondaryOrange) );
      height: 431px;
      width: 400px;

      p {
        font-size: var(--body-Large);
        color: var(--clr-text-black);
        font-weight: 500;
      }

      .check_circle {
        color: var(--clr-primaryOrange);
        margin-right: 17px;
      }
    }
  }
    .hero_btn {
      width: 297px;
      height: 60px;
      padding: 18px 0;
      margin-left: 60px;
    }

    .circle{
      position: relative;
      left: 800px;
      margin: 30px 0;
      filter: drop-shadow(0 0 2rem var(--clr-secondaryOrange) );
    }
`
export default HeroSection