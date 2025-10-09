import React, { useState } from "react";


const faqs = [
    {
        question: "Q1. What is Global Trade Coin (GTC)?",
        answer:
            "GTC is a stable digital token (on BEP-20) pegged 1:1 to the U.S. dollar. Each token is backed by a fiat reserve to ensure stability, making it suitable for cross-border trade, remittances, and global payments.",
        gradient: "from-black to-[#947641]",
    },
    {
        question: "Q2. On which blockchain is GTC issued?",
        answer:
            "GTC is implemented as a BEP-20 token (i.e. on the Binance Smart Chain).",
        gradient: "from-[#947641] to-black",
    },
    {
        question: "Q3. How is trust and security maintained?",
        answer:
            "Reserve audits & transparency: The fiat reserves backing GTC are periodically audited and publicly verifiable. Smart contract security: GTC’s smart contracts undergo rigorous code audits (by third-party security firms). Compliance & regulation: GTC aims to comply with applicable financial regulations and standards in major jurisdictions.",
        gradient: "from-black to-[#947641]",
    },
    {
        question: "Q4. What is the tokenomics of GTC?",
        answer:
            "A defined supply structure with reserve backing. Allocation for remittance pools, merchant adoption, ecosystem development, liquidity, and future growth. Mechanisms (if any) for minting, burning, or stabilizing supply to maintain peg.",
        gradient: "from-[#947641] to-black",
    },
    {
        question: "Q5. How is GTC different from other stablecoins?",
        answer:
            "<strong>Tailored to global trade</strong>: Focused on trade, B2B payments, remittances, not just retail use.<br/><br/><strong>Full backing & transparency</strong>: Emphasis on strong reserves, audits, and governance.<br/><br/><strong>Ecosystem support</strong>: Designed with pools and allocations to facilitate merchant adoption, trade liquidity, and partnerships.<br/><br/><strong>Regulated orientation</strong>: Envisions working with governments, enterprises, and regulatory regimes.",
        gradient: "from-black to-[#947641]",
    },
];


const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-[#111111] text-white py-16 px-6">

            <div className="w-full flex flex-col justify-center mb-4">
                <h2 className="text-center text-lg md:text-3xl Gbold mb-2">
                    <span className="bg-gradient-to-r from-[#FFCB71] to-[#FFA200] text-transparent bg-clip-text">
                        Frequently Asked Questions
                    </span>
                </h2>
                <div className="h-[2px] w-96 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
            </div>

            <div className="max-w-[77rem] mx-auto flex flex-col gap-6">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-r ${faq.gradient} rounded-md px-10 py-5 w-full cursor-pointer transition-all duration-300 ease-in-out`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="Gsemibold text-2xl">{faq.question}</h3>
                            <div className="text-3xl font-bold text-white transition-transform duration-300">
                                {openIndex === index ? '−' : '+'}
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                            }`}>
                            <p
                                className="text-sm md:text-base text-[#F8F8F8]"
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
