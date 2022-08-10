import React from 'react'
import styled from 'styled-components'

const SuccessPage = () => {
  return (
    <RedirectWrapper class="redirect">
            <div class="box1">
                <img src="../images/cancel.svg" alt="cancel"/>
                <h1><b>CONGRATULATIONS</b></h1>
                <P>You have successfully registered for our Newsletter.</P>
            </div>
        </RedirectWrapper>
  )
}

const RedirectWrapper = styled.div`
.redirect{
    margin-left: 4rem;
    margin-right: 4rem;
    background-color:#BBBBBACC;
    height: 100vh;
}
.box1{
    width: 934px;
    height: 330px;
    background-color: #FFF7F0;
    justify-content: center;
    text-align: center;
    border-radius: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
h1{
    color:#35bd05 ;
    font-weight: 700;
    font-size: 46px;
    padding-top: 2rem;
    font-style: normal;
    font-family: 'inter';
}
p{
    font-weight: 600;
    font-family: 'inter';
    font-size: large;
}
@media screen and (max-width: 768px){
    .box1{
        width: 534px;
        height: 330px;
        background-color: #FFF7F0;
        justify-content: center;
        text-align: center;
        border-radius: 32px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
    }
}

@media screen and (max-width: 380px){
    .redirect{
        margin-left: 1rem;
        margin-right: 1rem; 

    }
    .box1{
        width: 300px;
        height: 250px;
    }
    h1{
        font-weight: 450;
        font-size: 23px;
        padding-top: 2rem;
    }
    p{
        font-size: 16px ;
        padding: 0 1rem;
        font-weight: 100;
    }
    .box1 img{
        height: 15px;
    }
}
`
export default SuccessPage