import React from 'react';

const KeyFeatures = () => {
    const features = [
        {
            title: "Fiat Backed Coin",
            description: "Every GTC token is backed by an equivalent amount of USD reserves, ensuring the token's value remains stable. Use GTC as a real money.",
            gradient: "from-[#FFCB71] to-[#FFA200]"
        },
        {
            title: "Stable Value Coin",
            description: "No worry of market volatility and loss your currency, GTC's value is pegged to the USD, ensuring stability and predictability.",
            gradient: "from-[#FFA200] to-[#FFCB71]"
        },
        {
            title: "Wide Acceptance",
            description: "GTC's use cases are being widely adopted, increasing its acceptability and usability.",
            gradient: "from-[#FFCB71] to-[#FFA200]"
        }
    ];

    return (
        <div className=" py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="w-full flex flex-col justify-center mb-12">
                    <div className="mx-auto">
                        <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center mb-2">
                            Key Features
                        </p>
                    </div>
                    <div className="h-[2px] w-40 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative group bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#333] hover:border-[#FFCB71] transition-all duration-300 hover:transform hover:scale-105"
                        >
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                                    {feature.title}
                                </h3>
                                <p className="text-[#D8D8D8] text-base leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative Element */}
                            {/* <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;