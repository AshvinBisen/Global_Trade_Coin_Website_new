import { useEffect } from "react";
import "../Styles/ContactUs.css"
import logo from "../assets/logo/icon1.png"
import heroVideo from "../assets/images/presVid.mp4"

import facebook from "../assets/socialmedia/Facebook.png"
import twiter from "../assets/socialmedia/Twitter.png"
import Telegram from "../assets/socialmedia/Telegram App.png"
import Instagram from "../assets/socialmedia/Instagram.png"
import Medium from "../assets/socialmedia/Medium.png"

const ContactUsPage = () => {

    useEffect(() => {

        const inputs = document.querySelectorAll(".input");

        function focusFunc() {
            let parent = this.parentNode;
            parent.classList.add("focus");
        }

        function blurFunc() {
            let parent = this.parentNode;
            if (this.value == "") {
                parent.classList.remove("focus");
            }
        }

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

    }, []);
    return (
        <>
            <div className="containerg  Gregular ">
                <video autoPlay muted loop className="w-full absolute left-0 top-0 h-full  object-cover flex   z-[0]   opacity-[0.6]  " >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="big-circle  " >
                    <img src={logo} className="w-[25rem] absolute top-[50%] left-[50%]   transform -translate-y-1/2 -translate-x-1/2    " alt="" />
                </div>
                <img src="img/shape.png" className="square" alt />
                <div className="formC">
                    <div className="contact-info font-bold">
                        <h3 className="title  capitalize ">{"Let's"} get in touch</h3>
                        <p className="text">
                            Reach out to us for a free consultation and discover how AURUM can drive innovation in your digital transactions.
                        </p>
                        <ul className=" list-disc tracking-wider space-y-2 list-inside text-black ">
                            <li>  Company Address 07 </li>
                            <li>support@.globaltech.com</li>
                        </ul>
                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons">
                                <a target="blank" href="https://www.facebook.com/">
                                    <img className=" w-9" src={facebook} alt="" />
                                </a>
                                <a target="blank" href="https://x.com/">
                                    <img className=" w-9" src={twiter} alt="" />
                                </a>
                                <a target="blank" href="https://t.me/">
                                    <img className=" w-9" src={Telegram} alt="" />
                                </a>
                                <a target="blank" href="https://www.instagram.com/">
                                    <img className=" w-9" src={Instagram} alt="" />
                                </a>
                                <a target="blank" href="https://medium.com/">
                                    <img className=" w-9" src={Medium} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <span className="circle one" />
                        <span className="circle two" />
                        <form action="index.html" autoComplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label htmlFor>Username</label>
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label htmlFor>Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label htmlFor>Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="message" className="input" defaultValue={""} />
                                <label htmlFor>Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" defaultValue="Send" className="btn font-bold tracking-wider " />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUsPage