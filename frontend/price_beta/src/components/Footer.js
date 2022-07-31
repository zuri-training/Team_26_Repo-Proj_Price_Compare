import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiArrowUp } from 'react-icons/fi';
import Newsletter from '../assets/images/newsletter.png'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <FooterContainer>
      <div className='footer_details'>
        <div className="footer_info">
          <div className='about_us'>
            <h2>About Us</h2>
            <ul>
              <li><Link to='about-us'>About PriceBeta</Link></li>
              <li><Link to='compare-price'>Comparing Prices</Link></li>
              <li><Link to='/'>Contact Us</Link></li>
              <li><Link to='/'>FAQ</Link></li>
            </ul>
          </div>
          <div className='info'>
            <h2>Information</h2>
            <ul>
              <li><Link to='rules-guidelines'>Rules and Guidelines</Link></li>
              <li><Link to='privacy-policy'>Privacy Policy</Link></li>
              <li><Link to='cookie-policy'>Cookie Policy</Link></li>
              <li><Link to='/'>FAQ</Link></li>
            </ul>
          </div>
          <div className='catalogue'>
            <h2>Catalogue</h2>
            <ul>
              <li><Link to='/'>Food & Edibles</Link> </li>
              <li><Link to='/'>Electronics & Computers</Link> </li>
              <li><Link to='/'>Mobile Phones</Link> </li>
              <li><Link to='/'>Vehicles</Link> </li>
              <li><Link to='/'>Equipments & Tools</Link> </li>
              <li><Link to='/'>Fashion</Link> </li>
              <li><Link to='/'>Health & Beauty</Link></li>
              <li><Link to='/'>More...</Link></li>
            </ul>          
          </div>
        </div>        

        <div className='newsletter'>
          <img src={Newsletter} alt="newsletter-logo" />
          <p>
            Get updates on prices and shopping tips with PriceBeta Newsletter
          </p>
          <input type="email" placeholder='Your email address' />
          <button type='click' className='btn'>Subscribe</button>
        </div>

      </div>
      <hr />
      <div className='footer_copy'>
        <span>&copy; {footerYear} Nigeria</span>      
      </div>

    
      <Link to='/' className='back_to_top'>Back to Top <FiArrowUp/></Link>
    
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: var(--clr-grey6);
  color: var(--clr-background);
  padding: 24px 72px 35px 72px;

  a {
    color: var(--clr-bcgWhite);
  }

  .footer_details {
    display: flex;
    align-items: center;

    ul {
      line-height: 24px;
    }

    .footer_info {
      display: flex;
      align-items: center;
      height: 340px;

      h2 {
        font-size: 32px;
      }
      
      .about_us, .info, .catalogue {
        align-self: normal;
        margin-right: 40px;
      } 
    }
    
    .newsletter {
      background: var(--clr-secondaryOrange);
      width: 340px;
      color: var(--clr-black);
      padding: 18px 32px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      p {
        font-size: 24px;
        text-align: center;
        font-weight: 600;
      }

      input, button {
        height: 60px;
        width: -webkit-fill-available;
      }

      button {
        font-size: 20px;
        margin-top: 16px;
      }

    }
  }

  hr {
    border: 1px solid var(--clr-grey5);
    margin: 70px 0;
  }

  .footer_copy {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-grey3);
  }

  .back_to_top {
    position: absolute;
    right: 30px;
    // position: fixed;
    // right: 1.875rem;
    // font-size: 24px;
    // font-weight: 600;
    color: var(--clr-grey3);
  }

  
`

export default Footer