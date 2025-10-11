import React from 'react';

const ProblemSolution = () => {
    const problems = [
        {
            title: "High Cross-Border Transaction Fees",
            description: "Traditional banking systems charge excessive fees for international transfers, making global trade expensive."
        },
        {
            title: "Slow Settlement Times",
            description: "International payments can take 3-7 business days to settle, causing delays in business operations."
        },
        {
            title: "Currency Exchange Volatility",
            description: "Fluctuating exchange rates create uncertainty and potential losses in international transactions."
        },
        {
            title: "Limited Banking Access",
            description: "Many regions lack access to reliable banking infrastructure for global commerce."
        }
    ];

    const solutions = [
        {
            title: "Minimal Transaction Costs",
            description: "GTC offers significantly lower fees compared to traditional banking, making global transactions affordable."
        },
        {
            title: "Instant Global Transfers",
            description: "Send and receive payments anywhere in the world within seconds, 24/7, without banking delays."
        },
        {
            title: "Stable USD-Pegged Value",
            description: "Eliminate exchange rate risks with GTC's stable $1 peg, ensuring predictable transaction values."
        },
        {
            title: "Universal Accessibility",
            description: "Access GTC from anywhere with an internet connection, bypassing traditional banking limitations."
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 bg-[#1E1E1E]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="w-full flex flex-col justify-center mb-12">
                    <div className="mx-auto">
                        <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center mb-2">
                            Identified Problem & Solution
                        </p>
                    </div>
                    <div className="h-[2px] w-80 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Problems Section */}
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                </svg>
                                Current Problems
                            </h2>
                        </div>
                        
                        {problems.map((problem, index) => (
                            <div
                                key={index}
                                className="relative group bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-xl p-6 border border-red-500/30 hover:border-red-400 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-start mb-3">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                            <span className="text-white font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-red-400 mb-2">
                                                {problem.title}
                                            </h3>
                                            <p className="text-[#D8D8D8] text-base leading-relaxed">
                                                {problem.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Solutions Section */}
                    <div className="space-y-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent mb-4 flex items-center justify-center">
                                <svg className="w-8 h-8 mr-3 text-[#FFCB71]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                </svg>
                                GTC Solutions
                            </h2>
                        </div>
                        
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="relative group bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-6 border border-[#333] hover:border-[#FFCB71] transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-start mb-3">
                                        <div className="w-8 h-8 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                            <span className="text-black font-bold text-sm">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent mb-2">
                                                {solution.title}
                                            </h3>
                                            <p className="text-[#D8D8D8] text-base leading-relaxed">
                                                {solution.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 p-8 bg-gradient-to-r from-[#1a1a1a] to-black rounded-xl border border-[#333]">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent mb-4">
                        Ready to Experience the Solution?
                    </h3>
                    <p className="text-[#D8D8D8] text-lg mb-6 max-w-2xl mx-auto">
                        Join the revolution in global payments with GTC - where traditional banking problems meet blockchain solutions.
                    </p>
                    <button className="btn1 btn-hover-glow px-8 py-3 border-[#F7A00B] text-black hover:text-black transition-colors duration-300">
                        Get Started with GTC
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProblemSolution;