import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({title, product}) => {
  return <Wrapper>
    <div className='section-center'>
      <h3>
        <Link to='/'>Home</Link>
        {product && <Link to='/product-lists'> &gt;&gt;  Products</Link>}
        &gt;&gt; {title}
      </h3>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-text-black);
  h3 {
    text-transform: capitalize;
    // a {
    //   font-size: var(--bodyMedium);
    // }
  }
  a {
    color: var(--clr-text-black);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primaryOrange5);
  }
`

export default PageHero