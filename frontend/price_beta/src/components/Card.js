import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({categoryImg, categoryName}) => {
  return (
    <CardContainer>
        <Link to=''>
        <img src={categoryImg} alt="card img" />
        <h3>{categoryName}</h3>
        </Link>
    </CardContainer>
  )
}


const CardContainer = styled.div`
    background: var(--clr-secondaryOrange);
    height:400px;
    width: 400px;
    padding: 60px 0;
    border-radius: var(--borderRadius);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        border-radius: 50%;
    }
    h3 {
        color: var(--clr-background);
        font-size: var(--titleLarge);
        text-align: center;
    }
`

export default Card