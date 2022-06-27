import React ,{useState} from 'react';
import './Footer.scss';

import images from '../../constants/images';
import {AppWrap,MotionWrap} from '../../wrapper';
import {client} from '../../client';


const Footer = () => {

  const [formData, setformData] = useState({name:'',email:'',message:''});
  const [isformSubmitted, setisformSubmitted] = useState(false);
  const [ifloading, setifloading] = useState(false);

  const {name ,email,message}=formData;

  const handleChangeInput = (e) =>{
    const {name,value} =e.target;

    setformData({...formData,[name]: value});    
  }


  const handleSubmit =() =>
  {
    setifloading(true);

    const contact ={
      _type : 'contact',
      name:name,
      email:email,
      message:message
    }

    client.create(contact)
      .then(()=>{
      setifloading(false);
      setisformSubmitted(true);
    })
  };

  return (
    <>
    <h2 className='head-text'>Feel Free to <span>Ping me...</span></h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt='email'/>
        <a href="mailto:koundinya16.srp@gmail.com" className='p-text'>koundinya16.srp@gmail.com</a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt='email'/>
        <a href="tel:+917780183667" className='p-text'>+917780183667</a>
      </div>
    </div>
{ !isformSubmitted ?
    <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
          </div>
          <div>
          <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea className='p-text' placeholder='Your Query' value={message} name='message' onChange={handleChangeInput}/>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{ifloading ? 'Sending...':'Send Query'}</button>
    </div>
    : <div>
      <h3 className='head-text'>Thankyou for <span>getting in touch </span></h3>
    </div>
}
    
    </>
  )
}

export default AppWrap(MotionWrap(Footer ,'app__footer'),'contact','app__whitebg');