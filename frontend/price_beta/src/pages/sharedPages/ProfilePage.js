import React from 'react'
import aswad from "../../assets/images/aswad.jpeg"
import google from "../../assets/images/google.png"
import instag from "../../assets/images/instagram.png"
import {FaEdit} from "react-icons/fa"
import {AiOutlineDelete} from "react-icons/ai"
import {BsCartPlus} from "react-icons/bs"
import {AiOutlineLeft} from "react-icons/ai"

const ProfilePage = () => {
  return (
    <div>
        <div class="section">
            <div class="flex-pro">
                <AiOutlineLeft/>
                <h1>Profile</h1>
            </div>
            <div class="pic">
                <div className='my_pic'>
                    <img class="photo-img" src={aswad} alt="pics"/>
                </div>
                <div class="prof">
                    <button class="btn1">Remove photo</button>
                    <button class="btn2">Change photo</button>
                </div>
            </div>
            <hr/>
        </div>
        <div className='nav_pages section'>
            <ul>
                <li className='nav_link'><a href="#account">Account</a></li>
                <li className='nav_link'><a href="#security">Security</a></li>
                <li className='nav_link'><a href="#preference">Email Preference</a></li>
            </ul>
            <div className='watch'>
                <a href='#w'>Watchlist</a>
                <BsCartPlus className='icon'/>
            </div>
        </div>
        <div className='section p'>
            <div className='acct_detail'>
                <h4>ACCOUNT DETAILS</h4>
                <button><FaEdit/> Edit</button>
            </div>
            <hr />
            <p>Abdulmuiz Olayemi</p>
            <hr />
            <p>abdulmuizsharafadeen@gmail.com</p>
            <hr />
            <p>+23481 234 554 678</p>
            <hr />
            <p>1, Novelty Hospital, ilesha garage, lagos road, Nigeria.</p>
            <hr />
        </div>
        <div className='login'>
            <h4>Login & Security</h4>
            <h2>password</h2>
            <p>To reset the password to your account, you would need to enter your detail in the input field.</p>
            <div className="reset_container">
                <h5>Reset your password?</h5>
                <p>Don’t worry, we will just send you a password to help you reset .</p>
                <form action="">
                    <label htmlFor="">Email / Mobile (personal/work)</label><br /><br />
                    <input type="text" /><br /><br />
                    <button type='button'>Enter</button>
                </form>
            </div>
        </div>
        
        
        <div class="section_acct">
            <h4>Connected social accounts</h4>
            <p>Services used to login into ScoutVendor</p>
            <div class="social space">
                <div className='social_icon'>
                    <img src={google} alt=""/>
                    <p>Google</p>
                </div>
                <button class="btn3">Disconnect</button>
            </div>
            <div class="social space">
                <div className='social_icon'>
                    <img src={instag} alt=""/>
                    <p>Instagram</p>
                </div>
                <button class="btn3">Disconnect</button>
            </div>
            <section id='security' className='security'>
                <h3>Security</h3>
                <h5>Sign out from other devices</h5>
                <p>Signed in into other shared devices and you want to log out? End session by signing out from those devices.</p>
                <button><AiOutlineDelete/>  Sign out from devices</button>
                <h4>Delete your account</h4>
                <p>By deleting your account, you will no longer be able to login into ScoutVendor </p>
                <button><AiOutlineDelete/>  Delete account</button>
            </section>
            <section id='preference'></section>
        </div>
        

        <section className='pref-container'>
            <div className="head">
                <h1>Email Preferences</h1>
                <button type='submit'>Unsubscribe from all</button>
            </div>
            <div className='text-wrapper'>
            <h3>Marketing Emails</h3>
            <div className='pref-content'>
                <p>
                The choice is yours. Decide which emails you'd like to receive
                from us.
                </p>
                <div className='toggle-switch'>
                <input type='checkbox' />
                <div className='slider round'></div>
                </div>
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
            <h3>Privacy</h3>
                <div class='pref-content'>
                <p>
                    ScoutVendor can collect more data about me from third-party providers to
                    personalise <br />
                    my experience and messages.
                </p>
                <div class='toggle-switch'>
                    <input type='checkbox' />
                    <div class='slider round'></div>
                </div>
                </div>
            </div>
        </section>
        <div className='logout'>
            <a href="#d">Log Out</a>
        </div>
    </div>
  )
}


export default ProfilePage