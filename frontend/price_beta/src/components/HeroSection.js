import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HeroImg from '../assets/svg/HeroImg.svg'
import HeroImgMobile from '../assets/svg/HeroImgMobile.svg'



const HeroSection = () => {
  return (
    <HeroContainer className=''>
      <div className='hero'>
        <img src={HeroImg} alt="hero" className='' />
        <div className='hero_text'>
          <h1>Enjoy the Ease of Searching & Comparing Prices All in One Place.</h1>
          <div className='hero_btn'>
            <Link to='product-categories'><button className='btn btn_compare'>Compare</button></Link>
            <Link to='compare-price'><button className='btn btn_active'>How to Compare</button></Link>
          </div>
        </div>
      </div>

      <div className='hero_mobile'>
        <img src={HeroImgMobile} alt="hero" className='' />
        <div className='hero_text'>
          <h1>Enjoy the Ease of Searching & Comparing Prices All in One Place.</h1>
          <div className='hero_btn'><Link to='product-categories'><button className='btn btn_compare'>Compare</button></Link>
          <Link to='compare-price'><button className='btn btn_active btn_htc'>How to Compare</button></Link>
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  .hero_mobile {
    display: none;
  }
  .hero {
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    img {
      width: 1310px;
    }

    .hero_text {
      position: absolute;
      padding: 20px;
      bottom: 230px;

      h1 {
        color: var(--clr-background);
        width: 609px;
        margin-bottom: 36px;
      }

      .hero_btn {
        display: flex;
        align-items: flex-start;
        // justify-content: center;
      }

      .btn_compare {
        margin-right: 20px;
      }
    }
  }
    
  @media (max-width: 428px) {
    .hero {
      display: none;
    }
    .hero_mobile {
      display: block;
      position: relative;

      .hero_text {
        position: absolute;
        padding: 20px;
        bottom: 30px;
  
        h1 {
          color: var(--clr-background);
          font-size: var(--titleLarge);
          width: 272px;
          margin-bottom: 18px;
        }
  
        .hero_btn {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
  
        .btn_compare {
          margin-bottom: 16px;
          padding: 6px 45px;
        }

        .btn_htc {
          padding: 6px 16px;
        }
      }

      
    }
    
  }
`
export default HeroSection