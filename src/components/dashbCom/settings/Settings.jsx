import React from 'react'
import IdenticonImg from '../../identicon'
import "./settings.css"
const Settings = ({ address }) => {
  return (
    <div>
      <div>
        <div className='settings-page'>
          <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <br />
          <div className='section'>
          <span className="section-span">Change Full Name</span>
            <div className='settings-image'>
              <IdenticonImg address={address} />
            </div>
            <label htmlFor="profile" className='upload-pPic-btn'>Change profile picture
            </label>

            <input type="file" id='profile' style={{ display: "none" }} />
          </div>
          </div>


          <div className='section'>
          <span className="section-span">Change Full Name</span>
          <div className='address-box'>
            <div className='label'>Full Name</div>
            <input type="text" className='input' placeholder='Full Name' />
          </div>
        </div>
        </div>

        <div className='section'>
          <span className="section-span">Change Password</span>
          <div className='private-key-box'>
            <div>
              <label className='label'>Present Password
              <br />
                <input className='input' placeholder='input previous password' />
              </label>
            </div>

            <div>
              <label className='label'>New Password
              <br />
                <input className='input' placeholder='input previous password' />
              </label>
            </div>

            <div>
              <label className='label'>Re-Enter New Password
              <br />
              <input className='input' placeholder='input new password' />
              </label>
            </div>

<div>
  <button className='form-btn'>Change Password</button>
</div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Settings