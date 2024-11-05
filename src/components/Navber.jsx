import React from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navber = () => {
    return (
        <section className=' w-full after:absolute after:contain-[""] after:h-[86px] after:w-[91%] after:top-[64px] after:right-0 after:bg-[#fff]  after:rounded-s-full fixed z-40 pt-[64px]'>
            <Container>
                <Flex className=" py-[10px] justify-between items-center">
                    <div className=" w-[25%] flex items-center gap-6 z-50">
                        <img src={logo} alt="" />
                        <div className="">
                            <h2 className=' font-sans font-bold text-[18px] uppercase '>ortencey</h2>
                            <h3 className=' font-sans font-medium text-[14px] text-[#3661FC] '>Digital Marketing</h3>
                        </div>
                    </div>
                    <div className=" w-[50%] z-50">
                        <ul className=' flex gap-4'>
                            <li className=' relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                                <select name="" id="" className=' outline-none font-sans text-[16px] font-semibold '>
                                    <option value="">Home</option>
                                    <option value="">Home</option>
                                    <option value="">Home</option>
                                    <option value="">Home</option>
                                </select>
                            </li>
                            <li className=' font-sans text-[16px] font-semibold relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>About</li>
                            <li className=' relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                                <select name="" id="" className=' outline-none font-sans text-[16px] font-semibold'>
                                    <option value="">Services</option>
                                    <option value="">Services</option>

                                </select>
                            </li>
                            <li className=' relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                                <select name="" id="" className=' outline-none font-sans text-[16px] font-semibold'>
                                    <option value="">Team</option>
                                    <option value="">Team</option>

                                </select>
                            </li>
                            <li className=' relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                            <select name="" id="" className=' outline-none font-sans text-[16px] font-semibold'>
                                    <option value="">Pages</option>
                                    <option value="">Pages</option>
                                    <option value="">Pages</option>
                                    <option value="">Pages</option>

                                </select>
                            </li>
                            <li className=' relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                            <select name="" id="" className=' outline-none font-sans text-[16px] font-semibold'>
                                    <option value="">Shop</option>
                                    <option value="">Shop</option>
                                    <option value="">Shop</option>
                                </select>
                            </li>
                            <li className=' relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>
                            <select name="" id="" className=' outline-none font-sans text-[16px] font-semibold'>
                                    <option value="">News</option>
                                    <option value="">News</option>
                                    <option value="">News</option>
                                </select>
                            </li>
                            <li className=' font-sans text-[16px] font-semibold relative hover:text-[#FE651B] cursor-pointer duration-500 ease-in-out after:absolute after:contain-[""] after:bottom-[-20px] after:left-0 after:h-0 after:w-[55px] after:bg-[#FE651B] after:duration-500 after:ease-in-out after:hover:h-[4px]'>Contact</li>
                        </ul>
                    </div>
                    <div className=" w-[25%] flex gap-6 z-50">
                        <div className="py-4 px-4 border-2 border-[#000] rounded-full">
                            <IoSearchSharp className='text-[22px]' />
                        </div>
                        <div className="py-4 px-4  border-2 border-[#000] rounded-full">
                            <HiOutlineShoppingBag className='text-[22px]' />
                        </div>
                        <div className="  px-[30px] py-[2px] border-2 border-[#7c7b7b] bg-[#3661FC] text-[#fff]  items-center rounded-3xl flex gap-2">
                            <a className=' font-sans font-medium text-[16px]' href="#">Free Quote</a>
                            <FaArrowRightLong />

                        </div>
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Navber