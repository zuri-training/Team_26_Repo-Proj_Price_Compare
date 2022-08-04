import React from "react"


const loginSecurity = () => {
  return (
    <LoginSecurity>
        <div>
        <div class="login_and_security">
                <div class="login_and_security-breadcrumb">
                    <a href="">Home</a>
                    {/* <img src="images/breadcrumb.svg" alt="breadcrumb"> */}
                    <a href="">Login Security</a>
                </div>

                <div class="login_and_security-header">
                    <h1>Login & Security</h1>
                    <h3>Password</h3>
                    <p>To reset the password to your account, you would need to enter your detail in the input field.</p>
                </div>
                <div class="container">
                    <div class="login_and_security-input">
                        <h3>Reset your password? <span>Don&#39t worry, we will just send you a password to help you reset.</span></h3>
                        <label for="name">Email/Mobile (personal/work)</label><br/>
                        <input id="name" type="text" placeholder="Jane Dorothy"/><br/>
                        <button class="btn">Enter</button>
                    </div>
                    
                </div>

                <hr/>

                <div class="login_and_security-security">
                    <h3>Security <span>Sign out from other devices</span></h3>
                    <p>Signed in into other shared devices and you want to log out? End session by signing out from those devices.</p>
                    <button class="btn">Sign out from devices</button>

                </div>

                <hr/>

                <div class="login_and_security-delete">
                    <h3>Delete Your Account <span>By deleting your account, you will no longer be able to login into ScoutVendor</span></h3>
                    <button class="btn">Delete account</button>

                </div>     
        </div>
        
    </div>

    </LoginSecurity>
    
  );
};


const LoginSecurity = styled.loginsecurity`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    background: #FFF7F0;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    width: 100%;
    height: 100vh;
}


/* login_and_security-breadcrumb */

.login_and_security-breadcrumb{
    margin-top: 50px;
    margin-left: 70px;
}

.login_and_security-breadcrumb a{
    color: #F88007;
    font-weight: 600; 
    font-size: 1.25rem;

}

.login_and_security-breadcrumb a:nth-child(1){
    color: #131211; 
}

.login_and_security-breadcrumb img{
    padding: 0 8px;
}

/* login_and_security-header */

.login_and_security-header{
    margin: 75px 0 40px 70px;
}
.login_and_security-header h1{
    color: #140A00;
    font-weight: 600;
    font-size: 3.052rem;
    
}
.login_and_security-header h3
{
    font-weight: 600;
    font-size: 1.8rem;
    color: #131211;
    padding: 20px 0;
}
.login_and_security-header p
{
    color: #131211;
    font-size: 1.25rem;
    font-weight: 600;
}

/* login_and_security-input */


.container{
    display: flex;
    flex-direction: column;
    padding: 32px 32px 32px 0px;
    background: #FFFFFF;
    width: 504px; 
    margin-bottom: 45px; 
    margin-left: 70px;

}
.login_and_security-input{
    align-items: flex-start;
    gap: 10px;
    
}.login_and_security-input h3{
    font-weight: 600;
    font-size: 1.8rem;
    color: #131211;
}

.login_and_security-input span{
    padding: 30px 0;
}
.login_and_security-input label{
    font-size: 0.8rem;
    color: #131211;
}
.login_and_security-input input{
    width: 472px;
    height: 52px;
    background: #FFF7F0;
    border-radius: 8px;
    padding: 14px 16px;
    border: 1.2px solid #BCBBBA;
    color: #969595;
    font-size: 1rem;
    font-weight: 400;
}

/* login_and_security-security */

.login_and_security-security{
    margin: 40px 0 52px 70px;
}
.login_and_security-security h3,
.login_and_security-delete h3
{
    font-weight: 600;
    font-size: 1.8rem;
    color: #131211;

}
.login_and_security-security span,
.login_and_security-delete span
{
    margin: 28px 0;

}


.login_and_security-security p,
.login_and_security-delete p
{
    color: #131211;
    font-size: 1.5rem;
    font-weight: 600;
}

/* login_and_security-delete */

.login_and_security-delete{
    padding: 20px 0 87px 70px;
}


/* btn */
.btn{
    width: 472px;
    height: 52px;
    background: #F99939;
    border-radius: 8px;
    padding: 12px 4px;
    border: none;
    color: #FFF7F0;
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 25px;

}

a{
    text-decoration: none;
}
span{
    display: block;
}
hr{
    border: none;
    border-top: 1px solid #717070;
}
`

export default LoginSecurity;