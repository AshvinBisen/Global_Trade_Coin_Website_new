import { useState } from "react";
import copy from "../assets/logo/copy.png"

const Contract = () => {
    const [copied, setCopied] = useState(false);
    const text = "C3487cn34kds834894302j8432jf98345j5f734n";

    const handleCopy = async () => {
        try {
            // Modern clipboard API
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } else {
                // Fallback for older browsers or non-secure contexts
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);

                if (successful) {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                } else {
                    throw new Error('Copy command failed');
                }
            }
        } catch (err) {
            console.error("Copy failed: ", err);
            // Show error feedback to user
            alert('Failed to copy to clipboard. Please copy manually.');
        }
    };
    
    return (
        <>
            <div id="contract1" className=" bg-[#171717] w-full  Gregular z-10 px-4 py-10 ">
                <div className="w-full flex flex-col justify-center mb-4">
                    <h5 className="text-2xl Gsemibold text-center bg-gradient-to-r from-[#FFCB71] to-[#FFA200] bg-clip-text text-transparent mb-1">Smart Contract</h5>
                    <div className="h-[2px] w-48 bg-gradient-to-r mx-auto from-black via-[#FFCB71] to-black"></div>
                </div>
                <div className=" relative max-w-5xl bg-[#2E2921] border border-[#FF9D0036] flex flex-col justify-center items-center py-10 rounded-2xl gap-5 px-5 phone:px-2 mx-auto" style={{
                    boxShadow: "0 0 30px 8px rgba(255, 170, 0, 0.1)"
                }}>
                    <h3 className="Gregular text-lg sm:text-[26px] z-10 text-[#FFA100]" style={{ textShadow: "0px 4px 3px rgba(0,0,0,1)" }}>{text}</h3>
                    <div id="contract-button" className="flex z-10 flex-wrap justify-center gap-0">
                        <button
                            className="btn1 py-3 px-5"
                            onClick={handleCopy}
                        >
                            <span className="flex oxanium text-black Gsemibold text-xl">
                                <img src={copy} alt="" className="mr-2" />
                                Copy Address
                            </span>
                        </button>
                    </div>

                    {copied && (
                        <div className=" absolute bottom-2 text-sm mt-1 text-green-500 " style={{ zIndex: 1, }}>
                            Copied to clipboard!
                        </div>
                    )}
                </div>
                {/* </div> */}
            </div>
        </>
    );
};

export default Contract;
