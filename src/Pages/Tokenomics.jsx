import Wave from "../Components/Wave"
import tokoimg from "../assets/images/tokoimg.png"
import uh1 from "../assets/images/uh1.png"
import uh2 from "../assets/images/uh2.png"
import uh3 from "../assets/images/uh3.png"
import uh4 from "../assets/images/uh4.png"
import uh5 from "../assets/images/uh5.png"
import uh6 from "../assets/images/uh6.png"
import heroVideo from "../assets/images/herobgvideoM.mp4"
import UseScrollToElement from "../Components/UseScrollToElement"
const Tokenomics = () => {
    UseScrollToElement();

    return (
        <>
            <div className="bg-[#1E1E1E]" >
                {/* tokenomics part  */}
                <div className="pb-10 phone:py-5" >
                    <div className="flex flex-col items-center gap-10 justify-center">
                        <div className="flex flex-col w-full gap-10 justify-center items-center ">
                            <div className="w-full flex flex-col justify-center mb-4">
                                <div className="mx-auto">
                                    <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center">Tokenomics</p>
                                </div>
                                <div className="h-[2px] w-48 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                            </div>
                            <div className="flex px-5 flex-wrap max-w-[80rem] justify-center gap-7">
                                <div className="bg-gray-500 w-[45%] phone:w-full  gap-5 rounded-2xl flex justify-around px-6 sm:px-4 py-7 relative "
                                    style={{
                                        background: "linear-gradient(180deg, #1E1E1E 0%, rgba(132, 132, 132, 0.50) 100%)"
                                    }}
                                >
                                    <p className="text-2xl Gsemibold">Token Name</p>
                                    <div
                                        className="absolute w-[1.5px] inset-y-0 left-1/2 phone:left-1/2  bg-gradient-to-b from-[#171717] via-[#FFA200] to-[#171717]"
                                    ></div>
                                    {/* <p className="text-2xl text-[#FFA200] Gsemibold">Global Token</p> */}
                                    <p className="text-2xl text-center Gsemibold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">
                                        Global Trade Coin
                                    </p>
                                </div>
                                <div className="bg-gray-500 w-[45%] phone:w-full  gap-5 rounded-2xl flex justify-around px-4 py-7 relative "
                                    style={{
                                        background: "linear-gradient(180deg, #1E1E1E 0%, rgba(132, 132, 132, 0.50) 100%)"
                                    }}
                                >
                                    <p className="text-2xl Gsemibold">Symbols</p>
                                    <div
                                        className="absolute w-[1.5px] inset-y-0 left-1/2 phone:left-1/2  bg-gradient-to-b from-[#171717] via-[#FFA200] to-[#171717]"
                                    ></div>
                                    <p className="text-2xl Gsemibold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">GTC</p>
                                </div>
                                <div className="bg-gray-500 w-[45%] phone:w-full  gap-5 rounded-2xl flex justify-around px-4 py-7 relative "
                                    style={{
                                        background: "linear-gradient(180deg, #1E1E1E 0%, rgba(132, 132, 132, 0.50) 100%)"
                                    }}
                                >
                                    <p className="text-2xl Gsemibold">Network</p>
                                    <div
                                        className="absolute w-[1.5px] inset-y-0 left-1/2 phone:left-1/2  bg-gradient-to-b from-[#171717] via-[#FFA200] to-[#171717]"
                                    ></div>
                                    <p className="text-2xl Gsemibold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">BEP-20</p>
                                </div>
                                <div className="bg-gray-500 w-[45%] phone:w-full  gap-5 rounded-2xl flex justify-around px-4 py-7 relative "
                                    style={{
                                        background: "linear-gradient(180deg, #1E1E1E 0%, rgba(132, 132, 132, 0.50) 100%)"
                                    }}
                                >
                                    <p className="text-2xl Gsemibold">Total Supply</p>
                                    <div
                                        className="absolute w-[1.5px] inset-y-0 left-1/2 phone:left-1/2  bg-gradient-to-b from-[#171717] via-[#FFA200] to-[#171717]"
                                    ></div>
                                    <p className="text-2xl Gsemibold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">100 Trillion</p>
                                </div>
                                <div className="bg-gray-500 w-[45%] phone:w-full gap-5 rounded-2xl flex justify-around px-4 py-7 relative "
                                    style={{
                                        background: "linear-gradient(180deg, #1E1E1E 0%, rgba(132, 132, 132, 0.50) 100%)"
                                    }}
                                >
                                    <p className="text-2xl Gsemibold">Decimals</p>
                                    <div
                                        className="absolute w-[1.5px] inset-y-0 left-1/2 phone:left-1/2  bg-gradient-to-b from-[#171717] via-[#FFA200] to-[#171717]"
                                    ></div>
                                    <p className="text-2xl Gsemibold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Wave colorTop="#1E1E1E" colorBottom=" #1E1E1E" />

                {/* tokoimg */}
                <div className="flex flex-col gap-5 justify-center items-center pb-10 px-5">
                    {/* <p className="text-xl text-center text-gradient border-b-2 border-yellow-500 uppercase tracking-wider font-bold ">Token Distribution</p> */}
                    <h1 className=" text-gradient leading-tight text-3xl tablet:text-3xl tablet:phone:text-3xl  border-b-2 py-1 capitalize mb-4"
                        style={{
                            borderImage: "linear-gradient(to right, #1E1E1E, #FFA200, #1E1E1E) 1",
                        }}
                    >Token Distribution</h1>

                    <div className="max-w-[80rem] h-auto">
                        <img src={tokoimg} alt="" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tokenomics