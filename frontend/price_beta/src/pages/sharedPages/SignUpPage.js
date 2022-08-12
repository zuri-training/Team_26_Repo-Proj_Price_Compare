import React from 'react'
import styled from 'styled-components'

const SignUpPage = () => {
  return (
    <SignContainer>
      <div className='divWrap'>
        <div className='divOne'>
          <h1>Get Started With Us</h1>
          <p>Compare prices across a wide rage of websites as well as get amazing deals from ScoutVendor.</p>
          <img src="./categoryimages/sign2-img.jpg" alt=""/>
        </div> 
        <div className='divTwo'>
          <h2>Sign Up</h2>
          <hr/>
          <form>
            <label htmlFor='name'>Fullname</label>
            <input type="text" id="name" placeholder="Jane Dorothy" />
            <br/>
            <label htmlFor='name'>Email Address</label>
            <input type="email" id="email" placeholder="Janedorothy@gmail.com" />
            <br/>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" placeholder="password" />
          </form>
          <br/>
          <button className='email-bttn'>Sign up with email</button>
          <br/>
          <button className='google-bttn'>Sign up with Google</button>
          <p className='check-box'><input type="checkbox" />  <span>I agree to the <a href='/'>Terms and Conditions</a></span></p>
          <p className='term-txt'>By Completing this form, you acknowledge that you understand the <a href='/'>Privacy Policy</a></p>
          <p className='login-txt'>Already have an account?  <a href="login">LoginHere</a></p>
        </div>  
      </div>
    </SignContainer>
  )
}
const SignContainer = styled.div`
.divWrap{
  display: flex;
  justify-content: space-between;
  background: #F88007;
  margin: 10px auto;
  padding:2rem 10px;
}
.divWrap .divOne{
  margin: 30px 42px;
  padding-top: 50px;
}

.divWrap .divOne h1{
  color: #FFF7F0;
  padding: 32px 2px;
  font-weight: 700;
  

}
.divWrap .divOne p{
  color: #FFF7F0;
  font-weight: 600;
  font-size: 22px;
  padding-left: 10px
  

}
.divWrap .divOne img{
  padding: 20px;
}
.divWrap .divTwo{
  background: #FFF7F0;
  border-radius: 10px;
  margin: 30px;
  padding: 75px 55px;
  
}
.divWrap .divTwo h2{
  text-align: center;
  font-weight: 700;
  padding: 22px;
}
.divWrap .divTwo hr{
  border: 1px solid #E1E0DF;
  margin: 30px 0;


}
.divWrap .divTwo form{
  padding-top: 20px;
}
.divWrap .divTwo form input{
  background: #FFF7F0;
  display: block;
  width: 90%;
  color: #969595;
  padding: 15px 34px;
  border: 1.2px solid #BCBBBA;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  
}
.divWrap .divTwo form label{
  color: #717070;
  font-weight: 400;
}
.divWrap .divTwo .email-bttn{
  background-color: #F88007;
  width: 90%;
  color: #FFF7F0;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 28px;
  border: none;
  border-radius: 8px;
  display: block;
  cursor: pointer;

} 
.divWrap .divTwo .google-bttn{
  background: #131211;
  width: 90%;
  color: #FFF7F0;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 28px;
  border: none;
  border-radius: 8px;
  display: block;
  cursor: pointer;
}
.divWrap .divTwo .check-box{
  display: block;
  color: #131211;
}
.divWrap .divTwo .check-box input{
  border: 2px solid #969595;
  background-color: #FFF7F0
}
.divWrap .divTwo .check-box span a{
  text-decoration: none;
  color: #131211;
}
.divWrap .divTwo .term-txt{
  color: #131211;
}
.divWrap .divTwo .term-txt a{
  color: #131211;
}
.divWrap .divTwo .login-txt{
  color: #131211;
  font-weight:600;
  font-size:22px;
}
.divWrap .divTwo .login-txt a{
  color: #F88007;
  
}
@media (max-width: 1300px){
  .divWrap{
    width: 150%;
    margin: 10px;
    padding: 30px 18px;
    
  }
  .divWrap .divOne{
    width: 50%;
    padding: 10px 20px;
    margin-right: 10px;
  }
  .divWrap .divOne img{
    
  }
  .divWrap .divTwo{
    width: 50%;
    padding:10px 20px;
    margin-left: 10px;

  }
  .divWrap .divTwo form input{
    width: 90%;
    
  }
  .divWrap .divTwo .email-bttn{
    padding: 10px 10px;
  }
  .divWrap .divTwo .google-bttn{
    padding: 10px 10px;
  }

}


@media (max-width: 900px){
  .divWrap{
    width: 100%;
    flex-direction: column;
    padding: 0; 
  }
  .divWrap .divOne{
    width: 90%;
    margin: 15px auto;
    padding: 20px;
  }
  .divWrap .divTwo{
    width: 90%;
    margin: 15px auto;
    padding: 20px 25px;
  }
  .divWrap .divTwo form input{
    width: 90%;

  }
  .divWrap .divTwo .email-bttn{
    padding: 15px 20px;

  }
  .divWrap .divTwo .google-bttn{
    padding: 15px 20px;
  }
}


@media (max-width: 550px){
  .divWrap{
    padding: 1rem;
  }
  .divWrap .divOne img{
    width: 140px;
  }
  .divWrap .divTwo form input{
    padding: 0 10px;

  }
  .divWrap .divTwo .term-txt{
    font-size: 11px;
    
  }
}

@media (max-width: 455px){
  .divWrap {
    padding: 0;
    width: 100%;
    
    
  }
  .divWrap .divOne{
    width: 100%;
    margin: 25px auto;
    padding: 20px;
    
    
  }
  .divWrap .divOne h1{
    padding: 10px;
    text-align: justify;
    
  }

  .divWrap .divOne p{
    font-size: 16px;
    line-height: 22px;
  }
  .divWrap .divOne img{
    width: 328px;

  }
  .divWrap .divTwo{
    width: 90%;
    margin: 15px auto;
    padding: 20px 25px;
  }
  .divWrap .divTwo h2{
    text-align: left;
  }
  .divWrap .divTwo form input{
    width: 100%;
    padding: 10px 15px;

  }
  .divWrap .divTwo .email-bttn{
    width: 100%;
    padding: 10px 16px;
    font-size: 18px;

  }
  .divWrap .divTwo  .google-bttn{
    width: 100%;
    padding: 10px 16px;
    font-size: 18px;
  }

}




`

export default SignUpPage