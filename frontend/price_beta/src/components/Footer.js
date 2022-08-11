import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiArrowUp } from 'react-icons/fi';
import Newsletter from '../assets/images/newsletter.png'
import SVLogo from '../assets/images/SVLogo.png'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <FooterContainer>
      <div className='footer_details'>
        <div className="footer_info">
          <div className='about_us'>
            <h2>About Us</h2>
            <ul>
              <li onClick={scrollToTop}><Link to='about-us'>About PriceBeta</Link></li>
              <li onClick={scrollToTop}><Link to='compare-price'>Comparing Prices</Link></li>
              <li onClick={scrollToTop}><Link to='/'>Contact Us</Link></li>
              <li><Link to='/'>FAQ</Link></li>
            </ul>
          </div>
          <div className='info'>
            <h2>Information</h2>
            <ul>
              <li onClick={scrollToTop}><Link to='rules-guidelines'>Rules and Guidelines</Link></li>
              <li onClick={scrollToTop}><Link to='privacy-policy'>Privacy Policy</Link></li>
              <li onClick={scrollToTop}><Link to='cookie-policy'>Cookie Policy</Link></li>
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
      <div className='footer'>
        <div className='footer_content'>
          <Link to='/'>
            <img src={SVLogo} alt='scout vendor' className='footer_logo' />
          </Link>
          <span>&copy; {footerYear} Nigeria</span> 
        </div>
      
        <Link to='/' className='back_to_top'>Back to Top <FiArrowUp/></Link>

      </div>    
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: block;
  background: var(--clr-grey6);
  color: var(--clr-background);
  padding: 24px 64px 35px 72px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 12px 32px 0 12px;
  }

  a {
    color: var(--clr-bcgWhite);
  }

  .footer_details {
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      display: block;
    }

    ul {
      line-height: 35px;
    }

    .footer_info {
      display: flex;
      align-items: center;
      align-self: baseline;

      @media (max-width: 992px){
        flex-direction: column;
      }
      
      .about_us, .info, .catalogue {
        align-self: normal;
        margin-right: 40px;

        h2 {
          font-size: var(--headlineSmall);
        }

        ul li {
          font-size: var(--titleSmall);
          line-height: var(--lineHeight);
        }

        @media (max-width: 992px){
          margin: 0;
        }
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
      flex-direction: column;

      @media (max-width: 992px) {
        margin: 0;
      }

      p {
        font-size: 24px;
        text-align: center;
        font-weight: 600;
      }

      input, button {
        height: 60px;
        width: -webkit-fill-available;
        border-radius: var(--borderRadius);
        border-style: none;
        border: 1.2px solid #BCBBBA;
      }

      button {
        font-size: 20px;
        margin-top: 16px;
      }

    }
  }

  .hr {
    border: 1px solid var(--clr-grey5);
    margin: 70px 0;
    @media (max-width: 992px) {
      margin: 0 0 20px 0;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .footer_content {
      display: flex;
      justify-content: center;
      align-items: center;

      .footer_logo {
        width: 100px;
        margin-right: 30px;
      }
    }

    .back_to_top {
      color: var(--secondaryOrange);
      font-size: var(--bodySmall);
    }
  }
  

  @media (max-width: 428px) {
    display: block;
    padding: 50px 0 0 0;

    .footer_details {
      display: block;

      ul {
        line-height: 20px;
        margin: 5px 0;
      }

      .footer_info {
        display: flex;
        flex-direction: column-reverse;
        padding-left: 66px;

        .about_us, .info, .catalogue {
          align-self: normal;
  
          h2 {
            font-size: var(--headlineSmall);
          }

          ul li {
            font-size: var(--bodyMedium);
            line-height: var(--lineHeight);
          }
  
        }

        .about_us, .info, .catalogue {
          margin-top: 70px;
        }
      }

      .newsletter {
        margin: 78px 28px 72px 32px;
        padding: 10px 55px 22px;
        width: 368px;
        height: 330px;
        border: 2px solid #F6C598;

        p {
          font-size: var(--titleSmall);
        }

        input, button {
          height: 52px;
          width: 257px;
          padding: 12px 4px;

        }
        button {
          font-size: 20px;
          margin-top: 12px;
        }
      }

    }

    .footer {
      margin-bottom: 20px;
      padding: 0 12px 22px 12px;

      .footer_content {
        .footer_logo {
          width: 144px;
          height: 24px;
        }
      }
    }
  
  }
  
`

export default Footer