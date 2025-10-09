
import logo1 from "../assets/logo/gtc-logo.png"

import facebook from "../assets/socialmedia/Facebook.png"
import twiter from "../assets/socialmedia/Twitter.png"
import Telegram from "../assets/socialmedia/Telegram App.png"
import Instagram from "../assets/socialmedia/Instagram.png"
import Medium from "../assets/socialmedia/Medium.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
// import {Link} from "react-router-dom"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="  bg-[#171717] z-10  rounded-t-2xl border-2 overflow-hidden border-yellow-500  ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                    <div className="md:flex md:justify-between tablet:justify-center z-10">
                        <div className="flex  flex-col gap-5 mb-6 max-w-[40%] tablet:max-w-[100%] tablet:items-center  md:mb-0">
                            {/* <a href="" className="flex items-center">
                                <img src={logo1} className="h-[50px] me-3" alt="FlowBite Logo" />
                                <span className="self-center text-gradient text-4xl font-bold whitespace-nowrap  text-white">Logo  </span>
                            </a> */}
                            <h2 className="text-xl Gsemibold">About Global Token Coin</h2>
                            <p className=" tablet:text-center text-white " >Global Trade Coin (GTC) combines the stability of a $1-pegged digital currency with the innovation of blockchain technology. With practical use cases and a bold vision, we’re redefining the way the world trades, pays, and transacts globally.</p>
                        </div>
                        <div className="Gregular mt- flex gap-[5vmax] tablet:justify-evenly tablet:flex-wrap z-10">
                            <div className=" flex flex-col tablet:items-center " >
                                <h2 className="mb-6 text-xl Gsemibold text-white">Quick Links</h2>
                                <ul className="text-[#DADADA] Gsemibold text-base">
                                    <li className="mb-4 tablet:text-center  ">
                                        <Link to="/?=Hero" className=" capitalize unline  hover:underline " >home</Link>
                                    </li>
                                    <li className=" mb-4 tablet:text-center  " >
                                        <Link to="/Roadmap?=FAQ" className="hover:underline capitalize">FAQ's</Link>
                                    </li>
                                    <li className=" mb-4 tablet:text-center  " >
                                        <Link to="/Tokenomics" className="hover:underline capitalize">Tokenomics</Link>
                                    </li>
                                    <li className=" mb-4 tablet:text-center  " >
                                        <Link to="/Roadmap" className="hover:underline capitalize">Roadmap</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className=" mb-6 text-xl Gsemibold text-white">Legal</h2>
                                <ul className="text-[#DADADA] Gsemibold text-base">
                                    <li className="mb-4 tablet:text-center">
                                        <a target="blank" href="https://global-trading-currency.gitbook.io/global-trading-currency-docs" className="hover:underline ">White Paper</a>
                                    </li>
                                    <li className=" mb-4 tablet:text-center  ">
                                        <Link to="/?=usecase" className="hover:underline">Use Cases</Link>
                                    </li>
                                    {/* <li className="mb-4 tablet:text-center">
                                        <Link to="/Privacy_Policy" className="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li className="  tablet:text-center  ">
                                        <Link to="/TermsAndConditions" className="hover:underline">Terms &amp; Conditions</Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className=" flex flex-col tablet:items-center ">
                                <h2 className="mb-6 text-xl Gsemibold text-white">Contact Us</h2>
                                <ul className="text-[#DADADA] Gsemibold text-base">
                                    <li className="mb-3 tablet:text-center  max-w-[15rem]">
                                        Email: <br /> support@globlecrypto.io
                                    </li>
                                    <li className="mb-3 tablet:text-center  max-w-[15rem]">
                                        <Link to="/Contact" className="mb-3 tablet:text-center  hover:underline max-w-[15rem]">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                                <div className="flex gap-5" >
                                    <a target="blank" href="https://www.facebook.com/ "> <img className="hover:scale-[1.2] h-8 transform-scale duration-300" src={facebook} alt="" /> </a>
                                    <a target="blank" href="https://x.com/ "> <img className="hover:scale-[1.2] h-8 transform-scale duration-300" src={twiter} alt="" /> </a>
                                    <a target="blank" href="https://t.me/"> <img className="hover:scale-[1.2] h-8 transform-scale duration-300" src={Telegram} alt="" /> </a>
                                    <a target="blank" href="https://www.instagram.com/"> <img className="hover:scale-[1.2] h-8 transform-scale duration-300" src={Instagram} alt="" /> </a>
                                    <a target="blank" href="https://medium.com "> <img className="hover:scale-[1.2] h-8 transform-scale duration-300" src={Medium} alt="" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6  border-gradient sm:mx-auto border-gray-700 lg:my-8" />
                    <div className=" Gregular sm:flex sm:items-center tablet:text-center sm:justify-between">
                        <span className="text-sm   sm:text-center  text-gray-400">©  {currentYear}   <a href="" className="hover:underline">GTC</a>. All Rights   Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer