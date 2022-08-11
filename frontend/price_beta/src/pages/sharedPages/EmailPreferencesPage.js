import React from 'react';

const EmailPreference = () => {
  return (
    <>
      <section className='pref-container'>
        <h1>Email Preferences</h1>
        <div className='text-wrapper'>
          <h3>Marketing Emails</h3>
          <div className='pref-content'>
            <p>
              The choice is yours. Decide which emails you'd like to receive
              from us.
            </p>
            <button type='submit'>Unsubscribe from all</button>
          </div>
          <h3>Weekly Comms</h3>
          <div className='pref-content'>
            <p>
              Get your weekly dose of Canva news and learn with our handy design
              tips.
            </p>
            <div className='toggle-switch'>
              <input type='checkbox' />
              <div className='slider round'></div>
            </div>
          </div>
          <h3>Top Trending Templates</h3>
          <div className='pref-content'>
            <p>
              Stay inspired and one step ahead of the design curve with our top
              trending templates.
            </p>
            <div className='toggle-switch'>
              <input type='checkbox' />
              <div className='slider round'></div>
            </div>
          </div>
          <h3>Creator Spotlight Email</h3>
          <div className='pref-content'>
            <p>
              Check out amazing content from our photographers, illustrators,
              and more.
            </p>
            <div className='toggle-switch'>
              <input type='checkbox' />
              <div className='slider round'></div>
            </div>
          </div>
          <h3>Recommendations</h3>
          <div className='pref-content'>
            <p>Check out our recommended templates and find something new.</p>
            <div className='toggle-switch'>
              <input type='checkbox' />
              <div className='slider round'></div>
            </div>
          </div>
          <h3>What's New?</h3>
          <div className='pref-content'>
            <p>
              Stay up to date with all the latest features and product launches
              in Canva.
            </p>
            <div className='toggle-switch'>
              <input type='checkbox' />
              <div className='slider round'></div>
            </div>
          </div>
          <h3>Special Occasions</h3>
          <div className='pref-content'>
            <p>
              Opt-in or out of receiving Mother's/Father's Day communications.
            </p>
            <div className='toggle-switch'>
              <input type='checkbox' />
              <div className='slider round'></div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <div class='privacy'>
        <h3>Privacy</h3>
        <div class='pref-content'>
          <p>
            Canva can collect more data about me from third-party providers to
            personalise <br />
            my experience and messages.
          </p>
          <div class='toggle-switch'>
            <input type='checkbox' />
            <div class='slider round'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailPreference;
