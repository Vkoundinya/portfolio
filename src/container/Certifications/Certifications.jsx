import React,{useState,useEffect} from 'react';
import { HiChevronLeft,HiChevronRight} from 'react-icons/hi';
import {motion} from 'framer-motion';

import {AppWrap,MotionWrap} from '../../wrapper';
import {urlFor,client} from '../../client';
import './Certifications.scss';




const Certifications = () => {
  const [brands, setBrands] = useState([]);
  const [certifs, setCertifs] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  const handleClick =(index) =>{
    setcurrentIndex(index);
  }
  
  useEffect(() => {
    const queryBrand =`*[_type== 'brands']`;
    const queryCerts=`*[_type== 'certifications']`;

    client.fetch(queryBrand)
      .then((data) =>{
          setBrands(data);
      });
    client.fetch(queryCerts)
      .then((data) =>{
          setCertifs(data);
      });
  }, []);
  
  const certificate=certifs[currentIndex];
  return (
    <>
    <h2 className='head-text' style={{paddingBottom:20}}>My <span>Certifications</span> & <span>Companies</span> I Worked For</h2>
    {certifs.length && (
        <>
          <div className='app__certification-item app__flex'>
          <img src={urlFor(certificate.imgurl)} alt={certificate.name}/>
          <div className='app__certification-content'>
            <p className='p-text'>{certificate.text}</p>
            <div>
              <h4 className='bold-text'>{certificate.name}</h4>
              <h5 className='p-text'>{certificate.company}</h5>
            </div>
          </div>
          </div>

          <div className='app__certification-btns app__flex'>
            <div className='app__flex' onClick={()=>handleClick(currentIndex===0 ?certifs.length-1:currentIndex-1)}>
                  <HiChevronLeft/>
             </div>
            <div className='app__flex' onClick={()=>handleClick(currentIndex===certifs.length-1 ? 0:currentIndex+1)}>
                  <HiChevronRight/>
            </div>
          </div>
          

        </>
    )}
    
    <div className='app__certification-brands app__flex'>
      {
        brands.map((brand,index)=>(
          <motion.div
          whileInView={{opacity:[0,1]}}
          duration={{duration:0.5,type:'tween'}}
          key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
          </motion.div>
        ))
      } 
    </div>
    </>
  )
}
 
export default AppWrap(MotionWrap(Certifications,'app__certification'),'certifications','app__whitebg');