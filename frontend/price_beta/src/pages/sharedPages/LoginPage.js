import React from 'react'
import styled from 'styled-components'

const LoginPage = () => {
  return (
    <LoginContainer> 
      <div className="login-cont">
        <div className="first-div">
            <h2>Welcome Back</h2>
            <h3>We are happy to see you again</h3>
            <img src="./categoryimages/login-img.jpg" alt=""/>
        </div>
        <div className="login-form">
            <h3>Login</h3>
            <hr/>
            <form action="" className="form">
                <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Your Email address"/>
                <label htmlFor="Password"></label>
                    <input type="password" id="password" name="password" placeholder="Password"/>        
            </form>
            <p id="check-box"><span><input type="checkbox"/></span>Remember me</p>
            <button id="login-btn">Login</button>
            <button className="main-btn"> <a href="/">Google</a> </button>
            <p className="p-text">You don't have an account?<a href="sign-up">  Signup Here</a></p>
        </div>
      </div>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
.login-cont {
  width: 100%;
  background-color: #f99939;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.login-cont .first-div {
  margin: 2rem 4rem;
  width: 50%;
}

.login-cont .first-div #signin-text {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #fff7f0;
}

.login-cont .first-div h2 {
  color: #fff7f0;
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

.login-cont .first-div h3 {
  color: #fff7f0;
  font-size: 18px;
  font-family: "Inter", sans-serif;
}

.login-cont .login-form {
  width: 35%;
  background: #fff7f0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 10px 20px;
  margin-right: 3rem;
  margin-top: 70px;
  margin-bottom: 70px;
  border-radius: 6px;
}

.login-cont .login-form p {
  color: #717070;
}

.login-cont .login-form h3 {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 20px;
}

.login-cont .login-form hr {
  width: 95%;
  margin: 1.5rem;
  border: 1px solid #E1E0DF;
}

.login-cont .login-form .main-btn {
  background-color: black;
  width: 90%;
  height: 40px;
  border-radius: 6px;
  margin: 1em 2em;
  cursor: pointer;
}

.login-cont .login-form .main-btn a {
  text-decoration: none;
  color: #fff7f0;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 14px;
}

.login-cont .login-form #p-line {
  max-width: 500px;
  text-align: center;
  position: relative;
  margin-bottom: 9px;
}

.login-cont .login-form .form input {
  background: #fff7f0;
  width: 90%;
  padding: 5px;
  color: #969595;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-family: 400;
  line-height: 24px;
  border: 1px solid #969595;
  border-radius: 5px;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

.login-cont .login-form .form label {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #717070;
  margin-left: 1rem;
}

.login-cont .login-form #login-btn {
  width: 90%;
  background-color: #f88007;
  color: #fff7f0;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.login-cont .login-form .p-text {
  color: #717070;
}

.login-cont .login-form .p-text a {
  color: #f88007;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  border-bottom: 2px solid #f88007;
}

.login-cont .login-form #check-box {
  -ms-flex-item-align: start;
      align-self: flex-start;
  margin-left: 1rem;
}

@media only screen and (max-width: 1200px) {
  .login-cont {
    width: 100%;
  }
  .login-cont .first-div {
    width: 40%;
  }
  .login-cont .first-div img {
    width: 100%;
  }
  .login-cont .login-form {
    width: 60%;
  }
}

@media only screen and (max-width: 940px) {
  .login-cont {
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .login-cont .first-div {
    width: 90%;
  }
  .login-cont .first-div img {
    width: 80%;
  }
  .login-cont .login-form {
    width: 70%;
  }
  .login-cont .login-form .form label {
    margin-left: 1.5rem;
  }
  .login-cont .login-form .form input {
    width: 90%;
    margin-left: 1.5rem;
  }
  .login-cont .login-form #check-box {
    margin-left: 1.5rem;
  }
}

@media only screen and (max-width: 600px) {
  .login-cont {
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin: 0.5rem;
  }
  .login-cont .first-div {
    width: 80%;
  }
  .login-cont .first-div h2 {
    width: 100%;
    line-height: 24px;
  }
  .login-cont .first-div h3 {
    line-height: 22px;
  }
  .login-cont .first-div img {
    width: 100%;
  }
  .login-cont .login-form {
    width: 70%;
    margin-right: 1rem;
  }
  .login-cont .login-form h3 {
    -ms-flex-item-align: start;
        align-self: flex-start;
    margin-left: 1.5rem;
  }
  .login-cont .login-form .form {
    margin: 1rem;
  }
  .login-cont .login-form .form input {
    width: 95%;
    -ms-flex-item-align: start;
        align-self: flex-start;
    margin-left: 1rem;
    margin-right: 5rem;
  }
  .login-cont .login-form #check-box {
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
}

@media only screen and (max-width: 420px) {
  .login-cont {
    width: 100%;
  }
  .login-cont .first-div {
    margin: 2rem;
  }
  .login-cont .login-form {
    width: 80%;
  }
  .login-cont .login-form .form {
    width: 90%;
    margin-left: 1rem;
    margin-right: 3rem;
  }
}


`

export default LoginPage