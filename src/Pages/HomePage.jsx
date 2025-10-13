import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

import heroVideo from "../assets/images/herobgvideoM.mp4"
import aboutImg from "../assets/images/aboutUs.gif"
import Wave from "../Components/Wave"

import uc1 from "../assets/images/uc1.png"
import uc2 from "../assets/images/uc2.png"
import uc3 from "../assets/images/uc3.png"
import uc4 from "../assets/images/uc4.png"
import uc5 from "../assets/images/uc5.png"
import uc6 from "../assets/images/uc6.png"
import uc7 from "../assets/images/uc7.png"
import uc8 from "../assets/images/uc8.png"

import UseScrollToElement from '../Components/UseScrollToElement';
import Contract from '../Components/Contract';
import { Link } from 'react-router-dom';
import S7Roadmapmain from '../Components/S7Roadmap';

import FAQSection from '../Components/FAQSection';
import KeyFeatures from '../Components/KeyFeatures';
import WhyGTC from '../Components/WhyGTC';
import VisionMission from '../Components/VisionMission';
import WhyInvestGTC from '../Components/WhyInvestGTC';
import ProblemSolution from '../Components/ProblemSolution';
import Marquee from 'react-fast-marquee';

import pancakeswap from "../assets/feature-icons/pancackcap.png";
import trustwallet from "../assets/feature-icons/trustwallet.png";
import bscscan from "../assets/feature-icons/bscscan.png";
import coinmarketcap from "../assets/feature-icons/coinmarketcap.png";
import coinstore from "../assets/feature-icons/coinstore.png";
import metamask from "../assets/feature-icons/metamask.png";

const HomePage = () => {
    UseScrollToElement();
    const handleTouchStart = (event) => {
        const targetElement = event.target.closest(".custom-swipe-area");
        if (!targetElement) {
            event.preventDefault();
        }
    };

    const data = [
        { id: 1, logo: pancakeswap },
        { id: 2, logo: trustwallet },
        { id: 3, logo: bscscan },
        { id: 4, logo: coinmarketcap },
        { id: 5, logo: coinstore },
        { id: 6, logo: metamask },
    ];

    const duplicatedData = [...data, ...data];

    return (
        <div className="overflow-x-hidden w-full">
            {/* Hero  */}
            <div className="relative h-[90vh] w-full bg-black overflow-hidden">
                <video autoPlay muted loop className="w-full absolute left-0 top-0 h-full object-cover flex z-[1] opacity-[0.3]" onLoadedMetadata={(e) => {
                    e.target.playbackRate = 0.5;
                }}>
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className='absolute bottom-0 w-full h-16 translate-y-1/2 bg-black z-10 blur-lg'></div>
                <div className="relative flex flex-col h-[90%] sm:h-[99%] w-full justify-center items-center">
                    <div className="relative max-w-7xl mx-auto text-center flex items-center gap-6 sm:gap-10 flex-col px-4 sm:px-5 phone:px-3 z-[3] rounded-2xl p-4 sm:p-6">
                        <div className='absolute inset-0 h-full w-full bg-black blur-2xl -z-10'></div>
                        <h1 className="type heading-animate max-w-5xl text-gradient leading-tight text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase px-2">Real currency in digital world</h1>
                        <p className="max-w-4xl Gsemibold text-xs sm:text-lg md:text-xl lg:text-2xl tablet:text-xl px-2" >GTC powers global trade, travel, and payments without borders—bringing the world closer.
                        </p>
                        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center Gsemibold text-base sm:text-lg md:text-xl">
                            <a target='blank' href='https://global-trading-currency.gitbook.io/global-trading-currency-docs' className='btn1 btn-hover-scale px-4 sm:px-7 py-2 phone:px-5 phone:py-2 border-[#F7A00B]'>
                                <div className="flex gap-2 rounded tracking-wide text-xs sm:text-sm md:text-base text-black hover:text-white md:hover:bg-transparent border-gray-700">whitepaper
                                </div>
                            </a>
                            <Link to='/presale' className='btn1 btn-hover-glow px-4 sm:px-7 py-2 phone:px-5 phone:py-2 border-[#F7A00B]'>
                                <div className="flex gap-2 rounded tracking-wide text-xs sm:text-sm md:text-base text-black md:text-black hover:text-white md:hover:bg-transparent border-gray-700">Buy Now
                                </div>
                            </Link>
                        </div>
                        {/* </div> */}

                    </div>
                    {/* Logos Row */}
                    <section className="absolute bottom-0 px-2 sm:px-4 py-8 sm:py-12 md:py-16 overflow-x-hidden text-center text-white bg-transparent">
                        <div className="relative w-full py-2 sm:py-4 overflow-hidden bg-transparent">
                            <div className="flex gap-4 sm:gap-8 md:gap-10 animate-marquee">
                                <Marquee gradient={false} speed={60}>
                                    {duplicatedData.map((d, i) => (
                                        <img
                                            key={i}
                                            src={d.logo}
                                            alt={d.id}
                                            className="object-contain h-6 sm:h-8 md:h-10 lg:h-12 mr-4 sm:mr-8 md:mr-12"
                                        />
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Key Features */}
            <KeyFeatures />

            {/* about   */}
            <div id='about-us' className="flex min-h-fit flex-col justify-center items-center phone:pb-16 overflow-hidden">
                <div className="w-full flex flex-col justify-center mt-16">
                    <div className="mx-auto">
                        <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center mb-2">About Us</p>
                    </div>
                    <div className="h-[2px] w-36 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                </div>
                <div id="listing" className='relative px-4 sm:px-6 md:px-10 pb-10 phone:py-1 phone:px-2 flex flex-col max-w-7xl mx-auto w-full'>

                    <div id="filler-main" className='flex z-10  w-full gap-10 tablet:gap-0 tablet:flex-col tablet:items-center '>
                        <div id="filler-left" className='relative z-10 w-[45%]  flex tablet:w-[100%] tablet:phone:w-[100%]  justify-center items-center '>
                            <img src={aboutImg} alt="about image" />
                        </div>
                        <div className='hidden md:block h-72 w-[2px] bg-gradient-to-b from-black via-[#FFCB71] to-black bg-black mt-64'></div>
                        <div id="filler-right" className=' w-[50%] flex flex-col justify-center   gap-10 tablet:w-[100%] tablet:px-5  phone:gap-5  '>
                            <h1 className='text-5xl font-bold laptop:text-4xl  laptop:tablet:text-3xl leading-tight    '>
                                <span className="text-[#FFCB71] ">The Future of Seamless Global Transactions</span>
                            </h1>
                            <p className="text-[#D8D8D8] text-xl phone:text-base leading-normal">
                                Global Trade Coin (GTC) is a revolutionary stable digital currency pegged at $1, built on the BEP-20 network. Our vision is to become the world’s preferred trade and settlement currency, eliminating the complexities of foreign exchange rates, cross-border banking delays, and heavy transaction costs.
                            </p>
                            <p className="text-[#D8D8D8] text-xl phone:text-base leading-normal">
                                With a mission to merge blockchain innovation with real-world adoption, GTC empowers businesses, travelers, corporates, governments, and individuals to transact seamlessly on a global scale.
                            </p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>

            {/* Vision and Mission */}
            <VisionMission />

            {/* Why Invest in GTC */}
            <WhyInvestGTC />

            {/* Problem and Solution */}
            <ProblemSolution />



            {/* usecases  */}
            <div id="usecase" className="px-5 py-10 h-[40rem] tablet:h-[48rem] bg-[#1E1E1E]">
                <div className="w-full flex flex-col justify-center mb-16">
                    <div className="mx-auto">
                        <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center mb-2">Use Case</p>
                    </div>
                    <div className="h-[2px] w-36 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                </div>
                <div className=" relative border-2 border-yellow-500 rounded-2xl h-full p-4   flex justify-center flex-col gap-5">
                    <Swiper
                        direction="vertical"
                        centeredSlides={true}
                        onTouchStart={handleTouchStart}
                        modules={[Mousewheel]}
                        mousewheel={{
                            sensitivity: 1,
                            releaseOnEdges: true,
                        }}
                        slidesPerView="1"
                        spaceBetween={30}
                        // loop={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.3,
                            },
                        }}
                    >
                        {/* 1 */}
                        <SwiperSlide>
                            <div
                                id="uc1"
                                className="flex gap-3 sm:gap-5 justify-evenly items-center h-full tablet:flex-col px-2 sm:px-4"
                            >
                                <div id="left" className="w-full sm:w-[45%] tablet:w-full tablet:h-fit">
                                    <img
                                        src={uc1}
                                        className="w-full max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] border-2 sm:border-4 rounded-xl sm:rounded-2xl border-[#FFCB71] object-cover"
                                        alt="uc1"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-full sm:w-[40%] flex flex-col gap-3 sm:gap-5 justify-center tablet:w-full px-2"
                                >
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">Export-Import Currency</span>
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed">
                                        GTC can be seamlessly used in export-import transactions, helping businesses execute international trade efficiently. It reduces dependency on slow traditional banking systems and high foreign exchange costs.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 2 */}
                        <SwiperSlide>
                            <div
                                id="uc2"
                                className="flex gap-3 sm:gap-5 justify-evenly items-center h-full tablet:flex-col px-2 sm:px-4"
                            >
                                <div id="left" className="w-full sm:w-[45%] tablet:w-full tablet:h-fit">
                                    <img
                                        src={uc3}
                                        className="w-full max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] border-2 sm:border-4 rounded-xl sm:rounded-2xl border-[#FFCB71] object-cover"
                                        alt="uc2"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-full sm:w-[40%] flex flex-col gap-3 sm:gap-5 justify-center tablet:w-full px-2"
                                >
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">Tour & Travel Currency</span>
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed">
                                        Travelers can use GTC for flights, hotels, transport, and other services globally. It simplifies international transactions and provides a secure and convenient way to pay across borders.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 3 */}
                        <SwiperSlide>
                            <div
                                id="uc3"
                                className="flex gap-3 sm:gap-5 justify-evenly items-center h-full tablet:flex-col px-2 sm:px-4"
                            >
                                <div id="left" className="w-full sm:w-[45%] tablet:w-full tablet:h-fit">
                                    <img
                                        src={uc2}
                                        className="w-full max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] border-2 sm:border-4 rounded-xl sm:rounded-2xl border-[#FFCB71] object-cover"
                                        alt="uc3"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-full sm:w-[40%] flex flex-col gap-3 sm:gap-5 justify-center tablet:w-full px-2"
                                >
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">Convertible in Any Fiat Currency</span>
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed">
                                        GTC is fully convertible into any fiat currency, giving users the flexibility to transact, invest, or hold value in the currency of their choice.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 4 */}
                        <SwiperSlide>
                            <div
                                id="uc4"
                                className="flex gap-3 sm:gap-5 justify-evenly items-center h-full tablet:flex-col px-2 sm:px-4"
                            >
                                <div id="left" className="w-full sm:w-[45%] tablet:w-full tablet:h-fit">
                                    <img
                                        src={uc4}
                                        className="w-full max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] border-2 sm:border-4 rounded-xl sm:rounded-2xl border-[#FFCB71] object-cover"
                                        alt="uc4"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-full sm:w-[40%] flex flex-col gap-3 sm:gap-5 justify-center tablet:w-full px-2"
                                >
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">Investment and Tradable Currency</span>
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed">
                                        GTC can be used as a reliable investment and is fully tradable on global platforms. Investors gain access to a stable digital asset in the international market.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 5 */}
                        <SwiperSlide>
                            <div
                                id="uc5"
                                className="flex gap-3 sm:gap-5 justify-evenly items-center h-full tablet:flex-col px-2 sm:px-4"
                            >
                                <div id="left" className="w-full sm:w-[45%] tablet:w-full tablet:h-fit">
                                    <img
                                        src={uc5}
                                        className="w-full max-h-[16rem] sm:max-h-[20rem] md:max-h-[24rem] border-2 sm:border-4 rounded-xl sm:rounded-2xl border-[#FFCB71] object-cover"
                                        alt="uc5"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-full sm:w-[40%] flex flex-col gap-3 sm:gap-5 justify-center tablet:w-full px-2"
                                >
                                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">Transferable Anywhere, Instantly</span>
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-justify leading-relaxed">
                                        Send GTC anywhere in the world in seconds. Its fast and secure transfer capabilities make it ideal for businesses and individuals who need reliable cross-border payments.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 6 */}
                        <SwiperSlide   >
                            <div
                                id="uc1"
                                className="flex gap-5 justify-evenly items-center h-full tablet:flex-col"
                            >
                                <div id="left" className="w-[45%] tablet:w-full tablet:h-fit ">
                                    <img
                                        src={uc6}
                                        className="w-full max-h-[24rem] border-4 rounded-2xl border-[#FFCB71]"
                                        alt="uc1"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-[40%] flex flex-col gap-5 justify-center tablet:w-full "
                                >
                                    <h1 className="text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">Buy & Sell Anything, Anywhere, in Any Currency</span>
                                    </h1>
                                    <p className="text-justify">
                                        GTC empowers users to buy or sell goods and services globally without limitations. It bridges the gap between local and international markets, providing true global accessibility.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 7 */}
                        <SwiperSlide   >
                            <div
                                id="uc1"
                                className="flex gap-5 justify-evenly items-center h-full tablet:flex-col"
                            >
                                <div id="left" className="w-[45%] tablet:w-full tablet:h-fit ">
                                    <img
                                        src={uc7}
                                        className="w-full max-h-[24rem] border-4 rounded-2xl border-[#FFCB71]"
                                        alt="uc1"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-[40%] flex flex-col gap-5 justify-center tablet:w-full "
                                >
                                    <h1 className="text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">Easy to Use, Convert, and Transfer</span>
                                    </h1>
                                    <p className="text-justify">
                                        With a user-friendly interface and seamless integration, using, converting, or transferring GTC is simple and convenient for everyone, from beginners to experienced traders.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 8 */}
                        <SwiperSlide   >
                            <div
                                id="uc1"
                                className="flex gap-5 justify-evenly items-center h-full tablet:flex-col"
                            >
                                <div id="left" className="w-[45%] tablet:w-full tablet:h-fit ">
                                    <img
                                        src={uc8}
                                        className="w-full max-h-[24rem] border-4 rounded-2xl border-[#FFCB71]"
                                        alt="uc1"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-[40%] flex flex-col gap-5 justify-center tablet:w-full "
                                >
                                    <h1 className="text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">100% Fiat-Backed Currency</span>
                                    </h1>
                                    <p className="text-justify">
                                        GTC is fully backed by fiat currency, ensuring that every token has real value. Users can transact with confidence, knowing their investment is secure and guaranteed.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* 9 */}
                        {/* <SwiperSlide   >
                            <div
                                id="uc1"
                                className="flex gap-5 justify-evenly items-center h-full tablet:flex-col"
                            >
                                <div id="left" className="w-[45%] tablet:w-full tablet:h-fit ">
                                    <img
                                        src={uc9}
                                        className="w-full max-h-[24rem] border-4 rounded-2xl border-[#FFCB71]"
                                        alt="uc1"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-[40%] flex flex-col gap-5 justify-center tablet:w-full "
                                >
                                    <h1 className="text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">09. Proof of Reserve Transparency</span>
                                    </h1>
                                    <p className="text-justify">
                                        AUR’s proof of reserve system ensures transparency, letting users verify gold and Bitcoin backing in real time. Investors can use the AUR dashboard to confirm token reserves, building trust in its intrinsic value. This transparency enhances security, fostering user confidence and encouraging long-term adoption of the token.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide> */}

                        {/* 10 */}
                        {/* <SwiperSlide   >
                            <div
                                id="uc1"
                                className="flex gap-5 justify-evenly items-center h-full tablet:flex-col"
                            >
                                <div id="left" className="w-[45%] tablet:w-full tablet:h-fit ">
                                    <img
                                        src={uc10}
                                        className="w-full max-h-[24rem] border-4 rounded-2xl border-[#FFCB71]"
                                        alt="uc1"
                                    />
                                </div>
                                <div
                                    id="right"
                                    className="w-[40%] flex flex-col gap-5 justify-center tablet:w-full "
                                >
                                    <h1 className="text-4xl font-bold laptop:text-3xl laptop:tablet:text-2xl">
                                        <span className="text-gradient">10. Corporate Settlements</span>
                                    </h1>
                                    <p className="text-justify">
                                        Corporations can leverage AUR for efficient, large-scale cross-border transactions. Backed by reserves, AUR ensures security and transparency for international settlements. For example, a mining company can accept AUR for gold exports, reducing reliance on fiat currencies, lowering transaction costs, and ensuring payments retain value through tangible asset backing.
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>

            {/* Roadmap */}
            <S7Roadmapmain />

            {/* Why GTC */}
            <WhyGTC />

            {/* tokenomics */}
            {/* <Tokenomics /> */}

            {/* contrac address  */}
            <Wave colorTop="#1E1E1E" colorBottom="#171717" />
            <Contract />
            <Wave colorTop="#171717" colorBottom="#1E1E1E" />

            <FAQSection />
        </div>
    )
}

export default HomePage