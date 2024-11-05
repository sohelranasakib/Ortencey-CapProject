import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube} from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import flag from "../assets/flag.png"

const Header = () => {
    return (
        <section className=' w-full bg-[#fff] after:absolute after:contain-[""] after:h-[65px] after:w-[87%] after:top-0 after:left-0 after:bg-[#3661FC] after:rounded-e-full fixed z-50'>
            <Container>
                <Flex className=" justify-between py-[20px] items-center">
                    <div className=" flex ">
                        <h2 className=' font-sans font-bold text-[16px] text-[#fff] relative after:absolute after:contain-[""] after:h-[30px] after:w-[2px] after:top-[-3px] after:left-[370px] after:bg-[#708FFF] z-50'>Welcome to Ortencey Digital Market Agency</h2>
                        <div className=" flex pl-[50px] gap-10">
                        <h2 className=' flex items-center gap-2 font-sans font-bold text-[16px] text-[#fff]  relative after:absolute after:contain-[""] after:h-[30px] after:w-[2px] after:top-[-3px] after:left-[180px] after:bg-[#708FFF] z-50'> <IoCall className=' text-[#FE651B] text-[22px]'/> +88 ( 5548 ) 6548</h2>
                        <h2 className=' flex items-center gap-2 font-sans font-bold text-[16px] text-[#fff] z-50' > <MdOutgoingMail className=' text-[24px] text-[#FE651B]'/> infoyour@gmail.com</h2>
                        </div>
                    </div>

                    <div className=" flex items-center pr-[100px] z-50">
                        <div className=" pr-[20px] flex items-center gap-2">
                        <img className=' w-[28px]' src={flag} alt="" />
                            <ul>
                                <li>
                                    <select name="" id="" className=' bg-[#3661FC] outline-none font-sans text-[16px] font-semibold text-[#F1F1F1] '>
                                        <option value="">English</option>
                                        <option value="">Bangla</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                        <div className=" flex gap-6 text-[#95ACFF] text-[22px]">
                            <a href="" className=' relative after:absolute after:contain-[""] after:h-[30px] after:w-[2px] after:top-[-3px] after:left-[30px] after:bg-[#708FFF] text-[#FE651B]'><FaFacebookF /></a>
                            <a href="" className=' relative after:absolute after:contain-[""] after:h-[30px] after:w-[2px] after:top-[-3px] after:left-[30px] after:bg-[#708FFF] hover:text-[#FE651B] duration-300 ease-in-out'><FaLinkedinIn /></a>
                            <a href="" className=' relative after:absolute after:contain-[""] after:h-[30px] after:w-[2px] after:top-[-3px] after:left-[30px] after:bg-[#708FFF] hover:text-[#FE651B] duration-300 ease-in-out'><FaTwitter /></a>
                            <a href="" className=' hover:text-[#FE651B] duration-300 ease-in-out'><FaYoutube /></a>
                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Header