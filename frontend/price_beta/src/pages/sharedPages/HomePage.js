import React from 'react'
import styled from 'styled-components'
import { FeaturedCategories, Hero } from '../../components'

const HomePage = () => {
  return (
    <HomeContainer className='container'>
    <Hero/>
    <FeaturedCategories />
    </HomeContainer>
  )
}

const HomeContainer = styled.main`

`

export default HomePage