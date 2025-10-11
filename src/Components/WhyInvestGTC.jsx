import React from 'react';

const WhyInvestGTC = () => {
    const reasons = [
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
            ),
            title: "Stable Value Proposition",
            description: "GTC is pegged to USD, providing stability and predictability for your investments without the volatility of traditional cryptocurrencies."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            ),
            title: "100% Fiat Backed",
            description: "Every GTC token is backed by equivalent USD reserves, ensuring your investment is secure and fully redeemable at any time."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                </svg>
            ),
            title: "Growing Adoption",
            description: "With expanding use cases in trade, travel, and commerce, GTC's utility and demand continue to grow across global markets."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
            ),
            title: "Regulatory Compliance",
            description: "Built with regulatory compliance in mind, GTC operates within legal frameworks, providing security for institutional and retail investors."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
            ),
            title: "Global Accessibility",
            description: "Access your investment from anywhere in the world with instant transfers and conversions to any major fiat currency."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
            ),
            title: "Low Transaction Costs",
            description: "Enjoy minimal fees for transfers and conversions, making GTC cost-effective for both small and large transactions."
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 bg-[#171717]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="w-full flex flex-col justify-center mb-12">
                    <div className="mx-auto">
                        <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center mb-2">
                            Why Invest in GTC?
                        </p>
                    </div>
                    <div className="h-[2px] w-52 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                </div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="relative group bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#333] hover:border-[#FFCB71] transition-all duration-300 hover:transform hover:scale-105"
                        >
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-full flex items-center justify-center mr-4 text-black">
                                        {reason.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">
                                    {reason.title}
                                </h3>
                                <p className="text-[#D8D8D8] text-base leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <p className="text-[#D8D8D8] text-lg mb-6 max-w-3xl mx-auto">
                        Join thousands of investors who have chosen GTC as their preferred stable digital currency for global transactions and long-term value preservation.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <a 
                            href="https://global-trading-currency.gitbook.io/global-trading-currency-docs" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn1 btn-hover-scale px-6 py-3 border-[#F7A00B] text-black hover:text-black transition-colors duration-300"
                        >
                            Learn More
                        </a>
                        <button className="btn1 btn-hover-glow px-6 py-3 border-[#F7A00B] text-black hover:text-black transition-colors duration-300">
                            Start Investing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyInvestGTC;