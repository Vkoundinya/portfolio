import React from 'react';
import './Header.scss';

import {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';
import images from '../../constants/images';

const Header = () => {


  const scaleVariants={
    whileInView:{
      scale:[0,1],
      opacity:[0,1],
      transition:{
        duration:1,
        ease:'easeInOut'
      }
    }
  }
  return (
    <div className='app__header app__flex'>

      <motion.div whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:1}}
      whileHover={{scale:1.05}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div style={{marginLeft:20}}>
            <p className='p-text'>Hi,There I am </p>
            <h1 className='head-text'>Koundinya</h1>
          </div>
          </div>
          <div className='tag-cmp app__flex'>
              <p className='p-text'>Web Developer  </p>
              <p className='p-text'>& Machine Learning Enthusiast </p>
          </div>
        </div>
      </motion.div>


      <motion.div whileInView={{opacity:0.9}}
              transition={{duration:0.5,delayChildren:0.25}}   className="app__header-img"    
      >

      <img src={images.profile} alt="profile_img"></img>
      <motion.img
      whileInView={{scale:[0,1]}}
      transition={{duration:1,ease:'easeInOut'}}
      src={images.circle}
      className='overlay_circle'
      alt='profile_circle'
      />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react,images.python,images.azure,images.pandas,images.tensorflow].map((circle,index)=>(
          <motion.div 
          whileInView={{opacity:0.9}}
          whileHover={{scale:1.1}}
          className="circle-cmp app__flex" key={`circle-${index}`}>
                       <img src={circle} alt='circle'/>
          </motion.div>
        ))}
      </motion.div>
      </div>
  )
}

export default AppWrap(Header,'home');