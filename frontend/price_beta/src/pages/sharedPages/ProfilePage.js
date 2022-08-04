import React from 'react'
import angle_left from "../../assets/images/angle-left-solid.svg"
import aswad from "../../assets/images/aswad.jpeg"
import google from "../../assets/images/google.png"
import instag from "../../assets/images/instagram.png"

const ProfilePage = () => {
  return (
    <div>
          <div class="section">
            <div class="flex-pro">
                <img class="left" src= {angle_left} alt="row"/>
                <h1>Profile</h1>
            </div>
            <div class="pic">
                <div>
                    <img class="photo-img" src={aswad} alt="pics"/>
                </div>
                <div class="prof">
                    <button class="btn1">Remove photo</button>
                    <button class="btn2">Change photo</button>
                </div>
            </div>
          </div>
        <hr/>
        <div class="section">
            <h2>Name</h2>
            <p>Abdulmuiz Olayemi</p>
            <div class="button">
                <button class="btn3">Edit</button>
            </div>
        </div>
        <hr/>
        <div class="section">
            <h2>Address</h2>
            <p>3 street Lagos</p>
            <div class="button">
                <button class="btn3">Edit</button>
            </div>
        </div>
        <hr/>
        <div class="section">
            <h3>Connected social accounts</h3>
            <h4>Services used to login into ScoutVendor</h4>
            <div class="social">
                <div className='social_icon'>
                    <img src={google} alt=""/>
                    <p>Google</p>
                </div>
                <button class="btn3">Disconnect</button>
            </div>
            <div class="social">
                <div className='social_icon'>
                    <img src={instag} alt=""/>
                    <p>Instagram</p>
                </div>
                <button class="btn3">Disconnect</button>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage