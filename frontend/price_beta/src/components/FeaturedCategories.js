import React from 'react'
import styled from 'styled-components'
import {contentsDesktop, contentsMobile} from '../utils/content'
import FeaturedCard from './FeaturedCard'
import { Link } from 'react-router-dom'


const FeaturedCategories = () => {
  return (
    <FeaturedContainer >
      <div className='featuredDesktop'>
      <h2>Scout Vendor  Unique Features</h2>
      {contentsDesktop.map((content) => {        
        return <FeaturedCard content={content}/>
        })
      }

    <div className='featured_text_btn'>
      <h2>We aim to help you get the best prices for what its worth with ease.</h2>
      <div className='btnn'>
        <Link to='/'><button className='btn btn_compare'>Compare</button></Link>
        <Link to='/'><button className='btn btn_active'>How to Compare</button></Link>
      </div>
    </div>
    </div>

    <div className='featuredMobile'>
    <h2>Scout Vendor  Unique Features</h2>
      {contentsMobile.map((content) => {        
        return <FeaturedCard content={content}/>
        })
      }
    </div>
    </FeaturedContainer>

  )
}
const FeaturedContainer = styled.div`
  padding: 75px 60px;

  .featuredMobile {
    display: none;
  }
  
  h2 {
    font-size: var(--headlineMedium);
    margin-bottom: 80px;
  }

  .featured_text_btn {
    margin: 0 auto;
    width: 70%;
    h2 {
      text-align: center;
    }

    .btnn {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        margin-right: 30px;
      }
    }
  }

  @media screen and (max-width: 428px) {
    padding: 60px 8px;

    .featuredDesktop {
      display: none;
    }

    .featuredMobile {
      display: block;

      h2 {
        font-size: var(--titleMedium);
        margin-bottom: 65px;
      }
    }
  }

`

export default FeaturedCategories