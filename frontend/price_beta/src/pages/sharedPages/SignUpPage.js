import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import signup from '../../assets/svg/signup.svg'
import signupmobile from '../../assets/svg/signupmobile.svg'
import {FaGoogle} from 'react-icons/fa'
import { registerUser } from '../../features/user/userSlice'
// import FormField from '../../components/FormField'

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}

function SignUpPage() {
  const [values, setValues] = useState(initialState)
  const {user, isLoading} = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({...values, [name]: value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { first_name, last_name, email, password } = values
    if(!email || !password || !first_name || !last_name) {
      toast.error('Please Fill Out all Fields')
    }
    dispatch(registerUser({ first_name, last_name, email, password }))
    console.log(values)
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user])

  return (
    <SignUpWrapper>
      <div className='signup_text'>
        <h1>Get Started With Us</h1>
        <p>Compare prices across a wide rage of websites 
          as well as get amazing deals from ScoutVendor.
        </p>
        <img src={signup} className='signupimg_desktop' alt="signup flower" />
        <img src={signupmobile} className='signupimg_mobile' alt='signup flower' />

      </div>

      <div className='signup_form'>
        <h3>Sign Up</h3>
        <hr />
        <form onSubmit={onSubmit}>
          
          <label htmlFor="first_name">First Name</label>
          <input 
            type="text"
            name='first_name'
            value={values.name}
            onChange={handleChange}
            placeholder='Jane'
          />
          <label htmlFor="last_name">Last Name</label>
          <input 
            type="text"
            name='last_name'
            value={values.name}
            onChange={handleChange}
            placeholder='Dorothy'
          />

          <label htmlFor="email">Email Address</label>
          <input 
            type="email"
            name='email'
            value={values.email}
            onChange={handleChange}
            placeholder='janedorothy@email.com'  
          />

          <label htmlFor="password">Password</label>
          <input 
            type="password"
            name='password'
            value={values.password}
            onChange={handleChange}
            placeholder='Enter Password'          
          />

          <button type="submit" className='btn signup_btn'
            disabled={isLoading}
          >
          Sign Up with email
          </button>
        </form>

        <button className='btn google_btn'> 
         <FaGoogle/> Sign up with Google</button>

        <p className='t_c'> <input type="checkbox" required/> 
             I agree to the Terms and Conditions.
        </p>

        <p>By completing this form, you acknowledge 
          that you understand the privacy policy.
        </p>

        <p>Already have an account? <Link to='../login'>Login Here</Link> </p>

      </div>


    </SignUpWrapper>
  )
}

const SignUpWrapper = styled.div`
  background: var(--clr-primaryOrange5);
  color: var(--clr-white);
  display: flex;
  justify-content: space-between;
  padding: 64px 82px 48px 104px;

  .signup_text {
    align-self: center;
    margin-right: 200px;

    h1 {
      line-height: 64px;
      margin-bottom: 36px;
      width: max-content;
    }
    p {
      line-height: 32px;
      font-size: 22px;
      margin-bottom: 52px;
    }

    .signupimg_mobile {
      display: none;
    }
  }

  .signup_form {
    background: var(--clr-background);
    border-radius: 16px;
    color: var(--clr-text-black);
    padding: 24px;
    
    h3 {
      font-size: var(--headlineSmall);
      margin-bottom: 48px;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 48px 0 32px;

      .form_field {
        border: 1.2px solid var(--clr-grey4);
        border-radius: var(--borderRadius);
        background: var(--clr-background);
        font-family: var(--bodyFont);
        margin: 5px 0 30px 0;
        height: 52px;

        &::placeholder {
          padding-left: 8px;
        }

        &:focus {
          padding-left: 12px;
        }
      }

      input {
        border: 1.2px solid var(--clr-grey4);
        border-radius: var(--borderRadius);
        background: var(--clr-background);
        font-family: var(--bodyFont);
        margin: 5px 0 30px 0;
        height: 52px;
        padding-left: 12px;

        &::placeholder {
          padding-left: 8px;
        }
      }
    }

    .google_btn {
      background: var(--clr-text-black);
      padding: 14px 100px 14px 25px;
      margin-bottom: 32px;
      width: max-content;

      svg {
        margin-right: 50px;
      }
    }

    .t_c {
      margin-top: 48px;
      input {
        margin-right: 5px;
      }
    }
    p {
      a {
        color: var(--clr-primaryOrange5);
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 428px) {
    flex-direction: column;
    margin-top: 22px;
    padding: 72px 10px 12px;

    .signup_text {
      align-self: center;
      margin: 0 0 36px;
      padding: 0 24px;
  
      h1 {
        line-height: 64px;
        margin: 0;
        text-align: center;
        width: 100%;
      }
      p {
        line-height: 28px;
        margin: 52px 0 26px;
      }

      .signupimg_desktop {
        display: none;
      }

      .signupimg_mobile {
        display: block;
      }
    }

    .signup_form {
      padding: 28px 24px 46px;
      
      h3 {
        font-size: var(--headlineSmall);
        text-align: justify;
      }
  
      form {
        display: flex;
        flex-direction: column;
        margin: 48px 0 0;

  
        input {
          margin: 5px 0 30px 0;
          height: 52px;
  
          &::placeholder {
            padding-left: 12px;
          }
  
          &:focus {
            padding-left: 12px;
          }
        }

        .signup_btn {
          padding: 14px 92px;
        }
      }
      .google_btn {
        margin: 32px 0 0;
        width: 100%;
      }

      .t_c {
        margin-top: 32px;
      }

      p {
        margin-top: 50px;
        a {
          margin-left: 47px;
        }
      }
    }   
    
  }
`

export default SignUpPage