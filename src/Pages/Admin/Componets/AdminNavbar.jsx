import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

export default function AdminTopBar({ walletAddress = "Wallet Address" }) {
return (
<header
className="w-full bg-black px-4 py-2"
style={{
border: '1px solid',
borderImageSlice: 1,
borderImageSource: 'linear-gradient(180deg, #FFA100 0%, #FFE488 44%, #F89D00 100%)',
}}
>
<div className="max-w-full mx-auto">
<div className="flex items-center justify-between">
{/* Left: small rounded square with hamburger and subtle orange glow */}
<button
aria-label="menu"
className="h-10 w-10 rounded-md flex items-center justify-center border-none bg-black   [box-shadow:inset_-3px_-3px_7px_1px_#FFA20033,_inset_2px_2px_5px_1px_#FFA20033]"
>
<HiMenuAlt1  style={{ color: 'linear-gradient(180deg, #FFA100 0%, #FFE488 44%, #F89D00 100%)' , width:'32px', height:'auto' }} />
</button>


{/* center spacer to keep items at edges */}
<div className="flex-1" />


{/* Right: wallet address pill using the exact gradient */}
<button
className="px-5 py-2 rounded-md font-medium text-black border border-orange-300 shadow-sm bg-[linear-gradient(180deg,#FFA100_0%,#FFE488_44%,#F89D00_100%)]"
style={{ background: 'linear-gradient(180deg, #FFA100 0%, #FFE488 44%, #F89D00 100%)' }}
>
{walletAddress}
</button>
</div>
</div>
</header>
);
}