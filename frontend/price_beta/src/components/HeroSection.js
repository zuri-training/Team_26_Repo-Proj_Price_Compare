import React from 'react'
import styled from 'styled-components'
import heroimg from '../assets/images/hero-img.png'

const HeroSection = () => {
  return (
    <HeroContainer>
    <div>
        

    </div>

    <div>
        <img src={heroimg} alt="hero-image" />
        
    </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
    padding: 68px 65px 0;
`
export default HeroSection