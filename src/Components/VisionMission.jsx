import React from 'react';

const VisionMission = () => {
    return (
        <div className="py-16 px-4 sm:px-6 bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="w-full flex flex-col justify-center mb-12">
                    <div className="mx-auto">
                        <p className="bg-gradient-to-r w-fit from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent font-bold text-3xl text-center mb-2">
                            Vision & Mission
                        </p>
                    </div>
                    <div className="h-[2px] w-48 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                </div>

                {/* Vision and Mission Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision */}
                    <div className="relative group bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-8 border border-[#333] hover:border-[#FFCB71] transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">
                                    Our Vision
                                </h3>
                            </div>
                            <p className="text-[#D8D8D8] text-lg leading-relaxed">
                                To become the world's most trusted and widely adopted digital currency for global trade and commerce. We envision a future where GTC eliminates barriers in international transactions, making cross-border payments as simple as local transfers while maintaining complete stability and transparency.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="relative group bg-gradient-to-br from-[#1a1a1a] to-black rounded-xl p-8 border border-[#333] hover:border-[#FFCB71] transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#FFCB71] to-[#FFA200] rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent">
                                    Our Mission
                                </h3>
                            </div>
                            <p className="text-[#D8D8D8] text-lg leading-relaxed">
                                To revolutionize global commerce by providing a stable, secure, and efficient digital currency that bridges traditional finance with blockchain innovation. We are committed to empowering businesses, travelers, and individuals with seamless cross-border payment solutions while maintaining full transparency and regulatory compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;