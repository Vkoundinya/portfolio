import React from 'react';
import './Navbar.scss';
import {HiMenuAlt4,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import { useState } from 'react';
import images from '../../constants/images';
const Navbar = () => {

   const [toggle, settoggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo'/>
      </div>
      <ul  className='app__navbar-link'>
        {['home','about','skills','certifications','projects','contact'].map((item)=>(
          <li key={`link-${item}`} className='app__flex p-text'>
             <a href={`#${item}`}>{item}</a>
             <div/>
             
          </li>
          ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=>settoggle(true)}/>
            {
              toggle &&(
                  <motion.div whileInView={{x:[30,0]}}
                  transition={{duration:0.85,ease:'easeOut'}}
                  >
                  <HiX onClick={()=>settoggle(false)}/>
                  <ul>
                  {['home','about','skills','certifications','projects','contact'].map((item)=>(
                   <li  className='app__flex p-text'>
                    <a href={`#${item}`} onClick={()=>settoggle(false)}>{item}</a>
                    </li>
                  ))}
                  </ul>
                  </motion.div>
              )}
      </div>
    </nav>
  )
};

export default Navbar;