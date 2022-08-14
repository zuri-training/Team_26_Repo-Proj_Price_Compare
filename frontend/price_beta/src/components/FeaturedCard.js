import React from 'react'
import styled from 'styled-components'

const FeaturedCard = ({content: {id, body, image}}) => {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
        <div>
            <img src={`./images/featured/${image}`} alt="featured img" />
        </div>        
        <div>
            <p>{body}</p>
        </div>
    </StyledCard>
  )
}

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ layout }) => layout || 'row'};
    margin-bottom: 80px;

    div {
        margin-right: 40px;
        p {
            font-size: var(--headlineSmall);
            text-align: left;
            line-height: 48px;
        }
    }

    @media screen and (max-width: 428px) {
        margin-bottom: 40px;
        div {
            margin-right: 0;
            p {
                font-size: var(--bodyLarge);
                line-height: 24px;
                padding-left: 13px;
            }
        }
    }

`

export default FeaturedCard