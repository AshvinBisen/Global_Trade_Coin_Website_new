import rodCirc from "../assets/images/roadmapcirc.png"
import PropTypes from 'prop-types';

const S7Roadmapmain = () => {
    const roadmapData1 = [
        {},
        {
            phase: "01",
            quarter: "Sep 2024",
            title: " Project Conceptualization & Foundation ",
            description: [
                "Token launch on BEP-20 ($1 peg)",
                "Smart contract audit & security implementation",
                "Official website & whitepaper release",
                "Liquidity pool creation & price stability mechanisms"

            ],
        },
        {
            phase: "02",
            quarter: "Jan 2025",
            title: "Community Building & Seed Round ",
            description: [
                "Partnerships with import-export companies",
                "Integration with airlines, hotels, travel platforms",
                "First global remittance pilot",
                "Exchange listings on CEX/DEX platforms",
            ],
        },
        {
            phase: "03",
            quarter: " April 2025",
            title: "Development & Pre-Sale Launch ",
            description: [
                "GTC Wallet & Payment App launch",
                "Merchant & POS adoption worldwide",
                "Government & trade institution collaborations",
                "B2B settlement platform for global trade",
            ],
        },
        {
            phase: "04",
            quarter: "July 2025",
            title: " Public Sale (ICO) & Listing   ",
            description: [
                "Recognition as a stable global trade currency",
                "Expansion to multi-chains (Ethereum, Solana, Polygon)",
                "Remittance partnerships worldwide",
                "Establishment of Global Trade Reserve Fund",
                "Push towards CBDC collaborations"
            ],
        },
        {
            phase: "05",
            quarter: " Oct 2025",
            title: " Post-Launch Development & Growth ",
            description: [
                "Ecosystem Expansion ",
                "Staking Rewards Rollout ",
                "Reserve Optimization ",
                "Burn Mechanism Activation ",
            ],
        },
        {
            phase: "06",
            quarter: "Jan 2026",
            title: " Scaling & Global Adoption   ",
            description: [
                "Token launch on BEP-20 ($1 peg)",
                "Smart contract audit & security implementation",
                "Official website & whitepaper release",
                "Liquidity pool creation & price stability mechanisms"
            ],
        },
    ];

    return (
        <>
            <S7Roadmap roadmapdata={roadmapData1} />
        </>
    )
}

export default S7Roadmapmain


const S7Roadmap = ({ roadmapdata }) => {

    return (
        <>
            <section id="roadmap" className="mt-24 mb-12" >
                <div className="w-full mx-auto flex justify-center mt-12">
                    <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center">Roadmap</p>
                </div>
                <div className="w-full flex justify-center mb-12">
                    <div className="h-[2px] w-40 bg-gradient-to-r from-black via-[#FFCB71] to-black"></div>
                </div>
                {/* cards */}
                <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                    {/* 1 */}
                    <div className="flex md:contents">
                        <div className=" tablet:hidden relative max-w-[25rem] flex flex-col text-center justify-center my-10 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal" >
                            <h1 className="text-gradient text-[40px]" >Phase 01</h1>
                            <p className="text-3xl Gsemibold">Foundation (Q4 2025)</p>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div
                                    className="w-[0.4rem] h-full bg-indigo-300"
                                    style={{ background: "var(--roadmap-gradient2)" }}
                                ></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 top-1/2 left-0">
                                <img src={rodCirc} alt="pg" />
                            </div>
                        </div>

                        <div data-aos="fade-right" className="h-fit max-w-sm flex flex-row-reverse tablet:flex-col self-center relative my-10 tablet:my-5 col-start-6 col-end-10 mr-auto tracking-normal border-2 border-[#FFCB71] rounded-2xl bg-black">
                            <div className="flex flex-col rounded-xl roadmap-shadow tracking-wider py-10 px-6">
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[1].description[0]}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p> {roadmapdata[1].description[1]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p> {roadmapdata[1].description[2]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p> {roadmapdata[1].description[3]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex md:contents flex-row-reverse">
                        <div data-aos="fade-left" className="h-fit relative self-center flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal border-2 border-[#FFCB71] rounded-2xl bg-black">
                            <div className="h-fit flex flex-col rounded-xl roadmap-shadow tracking-wider py-10 px-6" >
                                <div className="flex  gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p   >{roadmapdata[2].description[0]}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[2].description[1]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[2].description[2]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[2].description[3]}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div
                                    className="w-[0.2rem] h-full bg-indigo-300 rounded-t-full "
                                    style={{ background: "var(--roadmap-gradient)" }}
                                ></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 top-1/2 -left-0  rotate-180 tablet:left-0 tablet:rotate-0 ">
                                <img src={rodCirc} alt="pg" />
                            </div>
                        </div>

                        <div className="tablet:hidden relative  max-w-[25rem] flex flex-col text-center justify-center my-10 rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                            <h1 className="text-gradient text-[40px]" >Phase 2</h1>
                            <p className="text-3xl Gsemibold">Adoption & Partnerships (Q1–Q2 2026)</p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex md:contents">
                        <div className=" tablet:hidden relative max-w-[25rem] flex flex-col text-center justify-center my-10 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal" >
                            <h1 className="text-gradient text-[40px]" >Phase 3</h1>
                            <p className="text-3xl Gsemibold">Ecosystem Expansion (Q3–Q4 2026)</p>
                        </div>
                        <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div
                                    className="w-[0.2rem] h-full bg-indigo-300"
                                    style={{ background: "var(--roadmap-gradient2) " }}
                                ></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 top-1/2 left-0    ">
                                <img src={rodCirc} alt="pg" />
                            </div>
                        </div>

                        <div data-aos="fade-right" className="h-fit max-w-sm flex flex-row-reverse tablet:flex-col self-center relative my-10 tablet:my-5 col-start-6 col-end-10 mr-auto tracking-normal border-2 border-[#FFCB71] rounded-2xl bg-black">
                            <div className="flex flex-col rounded-xl roadmap-shadow tracking-wider py-10 px-6">
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[3].description[0]}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p> {roadmapdata[3].description[1]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p> {roadmapdata[3].description[2]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p> {roadmapdata[3].description[3]}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="flex md:contents flex-row-reverse">
                        <div data-aos="fade-left" className="h-fit relative self-center flex tablet:flex-col max-w-[35rem] my-10 tablet:my-5 col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal border-2 border-[#FFCB71] rounded-2xl bg-black">
                            <div className="h-fit flex flex-col rounded-xl roadmap-shadow tracking-wider py-10 px-6" >
                                <div className="flex  gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p   >{roadmapdata[4].description[0]}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[4].description[1]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[4].description[2]}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-bold text-lg" >•</p>
                                    <p>{roadmapdata[4].description[3]}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                            <div className="flex items-center justify-center w-6 h-full">
                                <div
                                    className="w-[0.2rem] h-full bg-indigo-300 rounded-t-full "
                                    style={{ background: "var(--roadmap-gradient)" }}
                                ></div>
                            </div>
                            <div className="absolute w-6 h-6 -mt-3 top-1/2 -left-0  rotate-180 tablet:left-0 tablet:rotate-0 ">
                                <img src={rodCirc} alt="pg" />
                            </div>
                        </div>

                        <div className="tablet:hidden relative  max-w-[25rem] flex flex-col text-center justify-center my-10 rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                            <h1 className="text-gradient text-[40px]" >Phase 4</h1>
                            <p className="text-3xl Gsemibold">Global Recognition (2027 Onwards)</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

S7Roadmap.propTypes = {
    roadmapdata: PropTypes.oneOf(["roadmapData1", "roadmapData2", "roadmapData3"]).isRequired,
};