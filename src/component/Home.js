import React from 'react'
import image from '../img/ai image.webp'
import image1 from '../img/image1.jpg'
import image2 from '../img/image2.jpg'
import image3 from '../img/image3.jpg'
import image4 from '../img/image4.jpg'

import { FiAlignJustify } from "react-icons/fi";
import { BsEnvelope, BsFileEarmarkText,BsListCheck,BsBarChart ,BsBookmarkStar    } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='w-full bg-[#e6eef5] flex flex-row ml-3 '>
   {/* first part */}
      <div className='w-[80px] bg-[#f3f6f6]  px-4 fixed rounded-xl '>
     
  
       <FiAlignJustify className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <img src={image} alt="" className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsEnvelope className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa] ' />
       <BsFileEarmarkText  className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsListCheck className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]' />
       <BsBarChart  className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsBookmarkStar className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsEnvelope className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsFileEarmarkText className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsListCheck className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsBarChart className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
       <BsBookmarkStar className='h-[30px] w-[30px] mt-6 hover:bg-[#9fa6aa]'/>
     
      </div>

      {/* second part */}

      <div className='w-full bg-[#e6eef5] flex flex-col ml-[70px]'>
  
   {/* first */}
   <div className='ml-[2%] w-full bg-[#ffffff]   py-2 px-8 rounded-xl fixed'>
   <div className=' bg-[#d7dbdf] w-[20%] py-3 px-2 rounded-xl' >
   <h3> Non Disclosure  Agreement.pdf</h3>
   </div>
     
   </div>

   <div className=' ml-[15%] mt-[90px]'>
    <img src={image1}alt=" middle image" />
    <img src={image2}alt=" middle image" />
    <img src={image3}alt=" middle image" />
    <img src={image4}alt=" middle image" />
    
   </div>



      </div>
    </div>
  )
}

export default Home
