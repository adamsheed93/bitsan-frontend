import React, { useState, useEffect, useContext } from 'react'
import IdenticonImg from '../../identicon'
import "./profile.css"
import { BsClipboard, BsClipboardCheck } from "react-icons/bs"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { userCOntext } from '../../../context/context'
const Profile = ({ accountInfo }) => {
  const {user} = useContext(userCOntext)
  const [addCopy, setAddCopy] = useState(false)
  const [privateCopy, setPrivateCopy] = useState(false)
  const [privateShow, setPrivateShow] = useState(false)
  // const privateKey = "0x7972691d53ed44855A3374Ff07890E62aeFd2bA1"
// console.log(accountInfo);
const {address, privateKey,fullname} = user?.user
  useEffect(() => {
    setTimeout(() => {
      setAddCopy(false)
      setPrivateCopy(false)
    }, 10000)
  }, [addCopy, privateCopy])

  console.log(privateKey);
  console.log(address);
  return (
    <div>
      <div className='profile-page'>
        <div className='profile-image'>
          <IdenticonImg />
        </div>

        <div className='username'>{fullname}</div>
        {/* <div className='username'>Oluwajamiu enterprise</div> */}

        <div className='address-box'>
          <div className='label'>Address</div>
          <div className='address' onClick={() => {
            setAddCopy(true)
            navigator.clipboard.writeText(address)
          }}>{user?.user?.address.substring(0, 25)}... <div><span>{addCopy ? <BsClipboardCheck /> : <BsClipboard />}</span></div></div>
        </div>
      </div>

      <div className='private-key-box'>
        <div className='label'>Private key</div>
        <div className='private-key' onClick={() => {
          navigator.clipboard.writeText(privateKey)
        }}>
           {!privateShow ? "*******************************" : privateKey.substring(0, 20) + "..."}
          <div>
            <span style={{ padding: "0 10px" }} onClick={() => setPrivateShow(!privateShow)}>
              {!privateShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
            <span onClick={() => setPrivateCopy(!privateCopy)
            }>{!privateCopy ? <BsClipboard /> : <BsClipboardCheck />}</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile