import gtcImg1 from "../assets/logo/why-gtc1.png"
import gtcImg2 from "../assets/logo/why-gtc2.png"
import gtcImg3 from "../assets/logo/why-gtc3.png"

const WhyGTC = () => {
    const reasons = [
        {
            title: "Reliability",
            description: "GTC's stable value eliminates the risk of market volatility.",
            icon: gtcImg1,
            number: "01"
        },
        {
            title: "Ease of Use",
            description: "GTC is designed for seamless transactions, making it perfect for everyday use. Its Transfer, convert, invest, and make payment fast, safely, securely, easily in anywhere and any currency.",
            icon: gtcImg2,
            number: "02"
        },
        {
            title: "Global Acceptance",
            description: "GTC is being accepted globally, making it an ideal choice for international transactions.",
            icon: gtcImg3,
            number: "03"
        }
    ];

    return (
        <div className=" py-20 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#FFA200] to-[#FFCB71] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-3xl font-bold">
                        <span className="bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent Gregular">
                            Why Choose GTC?
                        </span>
                    </h2>
                    <div className="h-[2px] w-56 bg-gradient-to-r mx-auto from-transparent via-[#FFCB71] to-transparent mt-3"></div>
                </div>
                {/* <img src={gtcImg1} alt/="" /> */}

                {/* Reasons Layout */}
                <div className="space-y-12 md:space-y-16">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                                    <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent opacity-80">
                                        {reason.number}
                                    </div>
                                    {/* <div className="text-5xl">
                                        {reason.icon}
                                    </div> */}
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">
                                    {reason.title}
                                </h3>

                                <p className="text-[#D8D8D8] text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    {reason.description}
                                </p>
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 flex justify-center">
                                <div className="relative group">
                                    {/* Main Circle */}
                                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#FFCB71]/20 to-[#FFA200]/20 border-2 border-[#FFCB71]/30 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                        {/* Inner Glow */}
                                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#FFCB71]/10 to-[#FFA200]/10 blur-xl"></div>

                                        {/* Icon Container */}
                                        <div className="relative z-10 text-8xl md:text-9xl transform group-hover:rotate-12 transition-transform duration-500">
                                            <img src={reason.icon} alt={reason.title} className='rounded-full' />
                                        </div>
                                    </div>

                                    {/* Outer Ring */}
                                    <div className="absolute inset-0 rounded-full border border-[#FFCB71]/20 animate-spin-slow"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyGTC;