import React from 'react'
import styled from 'styled-components'
import CategoryCard from './CategoryCard'


const FeaturedCategories = () => {
  return (
    <CategoryContainer>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.section`
  // padding: 48px 64px 163px;
`
export default FeaturedCategories