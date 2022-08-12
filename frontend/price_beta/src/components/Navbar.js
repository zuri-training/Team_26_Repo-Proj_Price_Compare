import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SVLogo from '../assets/svg/SVLogoBlackOrange.svg'
import { MdMenu } from 'react-icons/md';
import { useProductsContext } from '../context/products_context';

const Navbar = () => {
  const { toggleSidebar } = useProductsContext()
  
  return (
    <NavContainer className='container'>
      <div className='menu_logo'>
        <MdMenu onClick={toggleSidebar} className='mobile_menu'/>  
        <Link to='/'>
          <img src={SVLogo} alt='scout vendor'/>
        </Link>
      </div>
      <div className='nav_text mobile'>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About SV</Link>
        <Link to='/'>FAQ</Link>
        <Link to='/contact-us'>Contact</Link>
      </div>
      <div className='nav_btn'>
        <button type='button' className='btn btn_signup'>Sign Up</button>
        <button type='button' className='btn btn_active'>Login</button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 64px;
  border-bottom: 1px solid var(--clr-grey5);

  .mobile_menu {
    display: none;
  }

  .nav_text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 100px;

    a {
      color: var(--clr-primaryOrange4);
      margin-right: 36px;
      font-size: var(--titleSmall);
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