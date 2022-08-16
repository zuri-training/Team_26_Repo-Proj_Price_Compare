import React from 'react'
import styled from 'styled-components'

const ComingSoonPage = () => {
  return (
    <ComingSoonContainer>

        <div className='cs_text'>
            <h2>Page Coming Soon...</h2>
            <p>This is presently in  progress. We are sorry for the inconviniencies.</p>
        </div>

    </ComingSoonContainer>
  )
}

const ComingSoonContainer = styled.div`
    background: var(--clr-background2);
    padding: 150px;
    margin: 0;

    .cs_text {
        background: var(--clr-background);
        border-radius: 32px;
        padding: 90px;
        text-align: center;

        h2 {
            color: var(--clr-primaryOrange5);
            font-size: var(--headlineMedium);
            line-height: 52px;
            font-weight: 700;
            margin-bottom: 57px;
        }
        p {
            font-weight: 600;
        }
    }

    @media screen and (max-width: 428px) {
        padding: 100px 10px;

        .cs_text {
            padding: 104px 25px;

            h2 {
                font-size: var(--headlineSmall);
                margin-bottom: 39px;
            }
            p {
                font-size: var(--bodyLarge);
            }
        }
    }

`

export default ComingSoonPage