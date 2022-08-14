import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({categoryImg, categoryName, bgColor, textColor, path }) => {
  return (
    <CardContainer style={{backgroundColor: bgColor}}>
        <Link to={path}>
        <img src={categoryImg} alt="card img" />
        <h3 style={{color: textColor}}>{categoryName}</h3>
        </Link>
    </CardContainer>
  )
}


const CardContainer = styled.div`
  padding: 30px 30px;
  border-radius: var(--borderRadius);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
  }
  h3 {
    color: var(--clr-text-black);
    font-size: var(--titleSmall);
    text-align: center;
    margin-top: 10px;
  }

  @media (max-width: 428px) {
    padding: 20px 20px;
  }
`

export default Card