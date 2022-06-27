import {AiFillInstagram,AiFillLinkedin,AiFillFacebook} from "react-icons/ai";
import React from 'react'

const SocialMedia = () => {
  return (
    <div className="app__social" >
        <div style={{cursor:'pointer'}}>
          <a href="https://www.linkedin.com/in/venkata-koundinya-ganugapati-5b57b5150/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        </div>
        <div style={{cursor:'pointer'}}>
        <a href="https://www.instagram.com/venkatakoundinyaganugapati/" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
        </div>
        <div style={{cursor:'pointer'}}>
        <a href="https://www.facebook.com/venkatakoundinya.ganugapati" target="_blank" rel="noreferrer"><AiFillFacebook/></a>
        </div>

    </div>
  )
}

export default SocialMedia