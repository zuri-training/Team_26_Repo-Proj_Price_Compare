import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiArrowUp } from 'react-icons/fi';
import Newsletter from '../assets/images/newsletter.png'
import SVLogoWhite from '../assets/images/SVLogoWhite.png'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdojokvr");
  if (state.succeeded) {
      return <p>Thanks for subscribing!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your email address'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button type="submit" className='btn' disabled={state.submitting}>
        Subscribe
      </button>
    </form>
  );
}


const Footer = () => {
  const footerYear = new Date().getFullYear()
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <FooterContainer>
      <div className='footer_details'>
      <div className='about_us'>
          <h5>About Us</h5>
          <ul>
            <li onClick={scrollToTop}><Link to='about-us'>About Scout Vendor</Link></li>
            <li onClick={scrollToTop}><Link to='compare-price'>Comparing Prices</Link></li>
            <li onClick={scrollToTop}><Link to='contact-us'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='info'>
          <h5>Information</h5>
          <ul>
            <li onClick={scrollToTop}><Link to='rules-guidelines'>Rules and Guidelines</Link></li>
            <li onClick={scrollToTop}><Link to='privacy-policy'>Privacy Policy</Link></li>
            <li onClick={scrollToTop}><Link to='cookie-policy'>Cookie Policy</Link></li>
            <li onClick={scrollToTop}><Link to='user-doc'>User Documentation</Link></li>
            <li><a href='https://github.com/zuri-training/Team_26_Repo-Proj_Price_Compare/blob/master/api_docs.md'
            target='_blank' rel="noopener noreferrer"
            >API Documentation</a></li>

          </ul>
        </div>
        <div className='catalogue'>
          <h5>Catalogue</h5>
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

        <div className='newsletter'>
          <img src={Newsletter} alt="newsletter-logo" />
          <p>
            Get updates on prices and shopping tips with Scout Vendor Newsletter
          </p>
          <ContactForm/>
        </div>
      </div>

      <hr className='hr' />
      <div className='footer'>
        <div className='footer_content'>
          <Link to='/'>
            <img src={SVLogoWhite} alt='scout vendor' className='footer_logo' />
          </Link>
          <span>&copy; {footerYear} Nigeria</span> 
        </div>
      
        <span onClick={scrollToTop} className='back_to_top'>Back to Top <FiArrowUp/></span>

      </div>    
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: block;
  background: var(--clr-primaryOrange1);
  color: var(--clr-background);
  padding: 64px;

  a {
    color: var(--clr-bcgWhite);
  }

  .footer_details {
    display: flex;
    justify-content: space-between;
    
    .about_us h5, .info h5, .catalogue h5 {
      align-self: baseline;
      font-size: var(--titleLarge);
    }

    .about_us, .info, .catalogue {
      ul {
        li {
          font-size: var(--bodyLarge);
          line-height: 35px;
        }
      }

    }
    
    .newsletter {
      background: var(--clr-secondaryOrange);
      width: 340px;
      color: var(--clr-black);
      padding: 18px 24px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        font-size: var(--titleMedium);
        text-align: center;
        font-weight: 600;
      }

      input, button {
        width: 300px;
        height: 52px;
        border-radius: var(--borderRadius);
        border-style: none;
        border: 1.2px solid #BCBBBA;
      }

      input[type=email] {
        padding: 12px 20px;
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
    padding: 64px 0 25px;

    .footer_details {
      flex-direction: column;

      .about_us h5, .info h5, .catalogue h5 {
        align-self: baseline;
        font-size: var(--titleMedium);
      }

      .about_us, .info, .catalogue {
        margin: 0 0 70px 64px;
        ul {
          li {
            font-size: var(--bodyMedium);
            line-height: var(--lineHeight);
          }
        }
  
      }

      .newsletter {
        padding: 10px 0 20px;
        border: 2px solid #F6C598;
        margin: 30px 24px 67px 24px;

        p {
          font-size: var(--titleSmall);
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
        span {
          font-size: 12px;
        }
      }
    }
  
  }
  
`

export default Footer