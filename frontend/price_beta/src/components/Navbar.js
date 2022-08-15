import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SVLogo from '../assets/svg/SVLogoBlackOrange.svg'
import { MdMenu } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { clearStore, toggleSidebar } from '../features/user/userSlice';

const Navbar = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  
  return (
    <NavContainer className='container'>
      <div className='menu_logo'>
        <MdMenu onClick={toggle}
          className='mobile_menu'/>  
        <Link to='/'>
          <img src={SVLogo} alt='scout vendor'/>
        </Link>
      </div>
      <div className='nav_text mobile'>
        <Link to='/'>Home</Link>
        <Link to='about-us'>About Us</Link>
        <Link to='user-doc'>User Documentation</Link>
        <Link to='contact-us'>Contact Us</Link>
      </div>
      <div className='nav_btn'>
        { user ? 
          <button 
          type='button' 
          className='btn btn_active'
          onClick={() => dispatch(clearStore('Logging Out...'))}
          >Logout</button>
        :
          <>
          <Link to='sign-up'><button type='button' className='btn btn_signup'> Sign Up </button></Link>
          <Link to='login'><button type='button' className='btn btn_active'>Login</button></Link>
          </>
        }
        </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 44px;
  border-bottom: 1px solid var(--clr-grey5);

  .mobile_menu {
    display: none;
  }

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 80px;

    a {
      color: var(--clr-primaryOrange4);
      margin-right: 30px;
      font-size: var(--bodyMedium);
      font-weight: 600;
    }
  }

  .btn_signup {
    margin-right: 32px;
  }
  
  @media (max-width: 428px) {
    padding: 22px 14px;

    .menu_logo {
      display: flex;

      .mobile_menu {
        color: var(--clr-primaryOrange5);
        cursor: pointer;
        display: inline-flex;
        margin-right: 15px;
        font-size: var(--titleSmall);
      }


    }    

    .mobile {
      display: none;
    }
    a {
      img {
        width: 170px;
      }
    }

    .nav_btn {
      display: none;
        .btn_signup {
        margin-right: 16px;
      }

      .btn_signup, .btn_login {
        padding: 4px 10px;
        font-size: var(--bodyMedium);
        font-weight: 400;
      }
    }

    

  }
  
`

export default Navbar