import React from 'react';

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <section className='contact-container'>
        <div className='contact-text'>
          <h2>Contact Us</h2>
          <p>
            ScoutVendor wishes to offer our customers with the best experience
            while using our services.
          </p>
          <p>
            Do you have any questions or remarks? Simply fill out this form and
            send us a message.
          </p>
          <p>You will get a reply from us within the next 24 hours.</p>
        </div>
        <form className='contact-form'>
          <h3>Send us a Message</h3>
          <div className='form-wrapper'>
            <div className='contact-form-group'>
              <label htmlFor='name'>First name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Jane'
              />
            </div>
            <div className='contact-form-group'>
              <label htmlFor='name'>Last name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Dorothy'
              />
            </div>
            <div className='contact-form-group'>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='Enter email'
              />
            </div>
            <div className='contact-form-group'>
              <label htmlFor='phone'>Phone number</label>
              <input
                type='text'
                className='form-control'
                id='phone'
                placeholder='(123) 456-7890'
              />
            </div>
          </div>
          <div className='contact-form-group'>
            <label htmlFor='country'>Country</label>
            <select className='form-control'>
              <option>Select country</option>
              <option>Nigeria</option>
              <option>Cameroon</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>...</option>
            </select>
          </div>
          <div className='contact-form-group'>
            <label htmlFor='message'>Message</label>
            <textarea
              className='form-control'
              id='message'
              rows='1'
              placeholder='Write your message'
            ></textarea>
          </div>
          <div className='contact-form-group'>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
