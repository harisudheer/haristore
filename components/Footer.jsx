import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
        <p>2024 Hari's KFC @All Rights reserved</p>  
        <p className='icons'>
            <AiFillInstagram/>
            <AiOutlineTwitter/>
            <AiFillFacebook/>
            <AiFillYoutube/>
        </p>    
    </div>
  )
}

export default Footer
