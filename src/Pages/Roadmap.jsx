import S7Roadmapmain from "../Components/S7Roadmap"
import Wave from "../Components/Wave"
 
import heroVideo from "../assets/images/herobgvideoM.mp4"
import Faqs from "../Components/Faqs"
import UseScrollToElement from "../Components/UseScrollToElement"
// import { useLocation } from "react-router-dom"
// import { useEffect } from "react"
const Roadmap = () => {
    UseScrollToElement();
         
    
    

    return (
        <>
            <div className="bg-[#1E1E1E]" >
                {/* roadmap hero */}
                <div className=" min-h-[90vh] flex items-center py-10 px-10 phone:px-5">
                    <div className="border-2 relative border-yellow-500 rounded-2xl w-full h-full justify-center items-center flex py-20 ">

                        <video autoPlay muted loop className="w-full absolute left-0 top-0 h-full  object-cover flex   z-[1]   opacity-[0.5]  " >
                            <source src={heroVideo} type="video/mp4" />
                        </video>

                        <div className="flex z-[2] flex-col gap-5 p-5 justify-center items-center text-center h-full max-w-[60rem] ">

                            <p className="text-sm text-center text-gradient border-b-2 border-yellow-500 uppercase tracking-wider font-bold ">Roadmap</p>
                            <h1 className=" text-gradient leading-tight text-6xl tablet:text-4xl tablet:phone:text-3xl  uppercase">Paving the Path to Digital Gold Revolution</h1>

                            <p className="max-w-[50rem] text-2xl tablet:text-base " >Our roadmap reflects a clear vision and strategic milestones to deliver a robust, innovative, and scalable ecosystem. Here’s how we’re turning our vision into reality:</p>
                        </div>
                    </div>
                </div>




                {/* <Wave colorTop="#1E1E1E" colorBottom=" #1E1E1E" /> */}

                {/* roadmap */}
                <div className="flex flex-col gap-5 justify-center items-center py-10 px-5">
                    <h1 className=" Gbold  text-8xl tablet:text-[12vw] text-cetner border-b-2 uppercase  text-transparent    w-fit  tracking-widest"
                        style={{
                            borderImage: "linear-gradient(to right, #1E1E1E, #FFA200, #1E1E1E) 1",
                            background: "linear-gradient(0deg, #FFCB71 18.7%, rgba(255, 162,0,0.00) 71.14%)",
                            WebkitTextStroke: "2px #FFA200",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Roadmap
                    </h1>
                    <h1 className=" text-gradient leading-tight text-2xl tablet:text-xl    border-b-2 py-2 capitalize "
                        style={{
                            borderImage: "linear-gradient(to right, #1E1E1E, #FFA200, #1E1E1E) 1",
                        }}
                    >Aurum Token Roadmap</h1>
                </div>
                <S7Roadmapmain />

                <Wave colorTop="#1E1E1E" colorBottom=" #1E1E1E" />




                {/* FAQ  */}
                <Faqs />
            </div>
        </>
    )
}

export default Roadmap