import React from 'react'
import Container from './Container'
import Flex from './Flex'
import about from "../assets/about.png"
import about0 from "../assets/about0.png"
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import about4 from "../assets/about4.png"
import { TbBrandReact } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
    return (
        <section className=' py-[50px]'>
            <Container>
                <Flex>
                    <div className=" w-[50%]">
                        <img className=' h-[85%]' src={about} alt="" />
                    </div>
                    <div className=" w-[50%]">
                        <h3 className=' flex items-center gap-2 font-sans font-medium text-[16px] text-[#3661FC]'> <TbBrandReact className=' text-[16px] text-[#FE651B]' /> About Our Company</h3>
                        <h2 className=' w-[450px] font-sans font-bold text-[30px] py-[30px]'>Best Digital Marketing Agency
                            For People</h2>
                        <p className=' w-[590px] font-sans font-medium text-[14px] text-[#6B6161]'>There are many variations of passages of Lorem Ipsum available, but the majority have assuffered alteration in some form, by injected humour, or randomised words     which don't a
                            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                            to be sure there isn't anything.</p>
                        <div className=" flex justify-between py-[30px]">
                            <div className=" w-[50%]">
                                <div className=" flex items-center gap-2 mt-4">
                                    <FaCheckCircle className=' text-[#FE651B]' />
                                    <h4>Digital Strategy</h4>
                                </div>
                                <div className=" flex items-center gap-2 mt-4">
                                    <FaCheckCircle className=' text-[#FE651B]' />
                                    <h4>SEO Optimization</h4>
                                </div>
                            </div>
                            <div className=" w-[50%]">
                                <div className=" flex items-center gap-2 mt-4">
                                    <FaCheckCircle className=' text-[#FE651B]' />
                                    <h4>Marketing</h4>
                                </div>
                                <div className=" flex items-center gap-2 mt-4">
                                    <FaCheckCircle className=' text-[#FE651B]' />
                                    <h4>Marketing</h4>
                                </div>
                            </div>

                        </div>
                        <div className=" w-[130px] px-[20px] py-[10px] bg-gradient-to-r from-[#FE651B] to-[#FFAA52] rounded-3xl">
                            <a className=' font-sans font-semibold text-[16px] text-[#fff]' href="#">Read More</a>
                        </div>
                    </div>
                </Flex>
                <div className=" flex gap-6">
                    <div className=" w-[25%]">
                        <img src={about1} alt="" />
                        <img className='mt-[-180px] w-full' src={about0} alt="" />
                        <div className="  py-7 px-8 bg-[#F4F4FF] rounded-b-2xl ">
                            <h2 className='font-serif font-semibold text-[22px] text-[#000] '>Graphics Design</h2>
                            <p className='font-serif font-medium text-[14px] text-[#000]'>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                        </div>
                    </div>
                    
                        <div className=" w-[25%]">
                            <img src={about2} alt="" />
                            <img className='mt-[-180px] w-full' src={about0} alt="" />
                            <div className="  py-7 px-8 bg-[#F4F4FF] rounded-b-2xl ">
                                <h2 className='font-serif font-semibold text-[22px] text-[#000] '>Web Developer</h2>
                                <p className='font-serif font-medium text-[14px] text-[#000]'>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                            </div>
                        </div>
                        <div className=" w-[25%]">
                            <img src={about3} alt="" />
                            <img className='mt-[-180px] w-full' src={about0} alt="" />
                            <div className="  py-7 px-8 bg-[#F4F4FF] rounded-b-2xl ">
                                <h2 className='font-serif font-semibold text-[22px] text-[#000] '>Digital Marketing</h2>
                                <p className='font-serif font-medium text-[14px] text-[#000]'>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                            </div>
                        </div>
                        <div className=" w-[25%]">
                            <img src={about4} alt="" />
                            <img className='mt-[-180px] w-full' src={about0} alt="" />
                            <div className="  py-7 px-8 bg-[#F4F4FF] rounded-b-2xl ">
                                <h2 className='font-serif font-semibold text-[22px] text-[#000] '>App Design</h2>
                                <p className='font-serif font-medium text-[14px] text-[#000]'>Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.</p>
                            </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About