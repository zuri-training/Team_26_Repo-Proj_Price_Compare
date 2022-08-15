import React from 'react'
import styled from 'styled-components'


const ProductCard = ({category, name, brand, url}) => {
  return (
    <ProductCardWrapper>
        <h3>Name: {name}</h3>
        <p>Category: {category}</p>
        <p>Brand: {brand}</p>
        <button className='btn'>Detail</button>
        <hr />
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  color: var(--clr-text-black);
  line-height: var(--lineHeight);
  h3 {
    font-weight: 700;
  }

  p {
    font-size: var(--bodyLarge);
  }

`

export default ProductCard