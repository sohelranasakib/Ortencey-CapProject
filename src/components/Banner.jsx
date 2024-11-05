import React from 'react'

import banner from "../assets/banner.png"
import Container from './Container'

const Banner = () => {
  return (
    <section className=' pt-[65px]'>
        <div className=" relative">
        <img src={banner} alt="" />
            <div className=" w-[440px] absolute top-[350px] left-[200px]">
                <h3 className=' font-sans font-medium text-[16px] text-[#FE651B]'>Your Trusted Ortencey Agency</h3>
                <h1 className=' font-sans font-bold text-[40px] text-[#fff] py-[10px]'>Our Digital Agency With
                Excellence Services</h1>
                <p className=' font-sans font-medium text-[14px] text-[#fff] pb-[20px]'>The 3 golden rules professional Digital Marketing Agency don’t
                want you to know about.</p>
                <div className=" w-[180px] px-[30px] py-[10px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-3xl">
                    <a className=' font-sans font-semibold text-[16px] text-[#fff]' href="#">Discover More</a>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Banner