import React ,{useState,useEffect} from 'react';
import './Skills.scss';
import {motion} from 'framer-motion';
import {AppWrap} from '../../wrapper'; 
import {urlFor,client} from '../../client';

const Skills = () => {
const [skills, setSkills] = useState([]);
useEffect(()=>{

const skillQuery= `*[_type=='skills']`;

client.fetch(skillQuery)
  .then((data)=>{
    setSkills(data);
  });

},[]);
  return (
    <>
    <h2 className='head-text' >MY <span>Tech Stack</span></h2>
    
    <div className='app__skills-container'>
      <motion.div className='app__skills-list'>
      {skills.map((skill) => (
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__skills-item app__flex'
        key={skill.name}
        >
          <div className='app__flex' style={{backgroundcolor:skill.bgColor}}>
            <img src={urlFor(skill.icon)} alt={skill.name}/>
          </div>
          <p className='p-text'>{skill.name}</p>

        </motion.div>
      ))}
      </motion.div>
    </div>
    </>
  );
};

export default AppWrap(Skills ,'skills');