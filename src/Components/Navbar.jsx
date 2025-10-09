import { useEffect, useState } from 'react';
import logo from "../assets/logo/gtc-logo.avif"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setisScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const closeMenu = () => {
        setIsNavVisible(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <nav
                className={`${isScrolled ? 'bg-black/10 absolute backdrop-blur-md' : 'bg-black/1'
                    } w-full z-10 overflow-x-hidden  bg-transparent top-0 start-0 border-b border-none`}
            >
                <div className="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
                    <a href="/" onClick={closeMenu}>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img loading="lazy" src={logo} className='w-auto h-10 phone:w-[7rem]' alt="VOIP" />
                        </div>
                    </a>
                    <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link to="/Presale" className=' btn1 nav-btn px-5 py-2   phone:px-3  border-[#F7A00B] '>
                            <div className="flex gap-2 Gsemibold rounded tracking-wide phone:text-sm text-black hover:text-white md:hover:bg-transparent border-gray-700">Buy Token
                            </div>
                        </Link>
                        <button
                            onClick={toggleNav}
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 bg-gray-900 border border-[--primary-color] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[--prime-color] ring-[--prime-color] hover:bg-gray-800 hover:scale-110 hover:rotate-180 transition-all duration-300 ease-in-out"
                            aria-controls="navbar-sticky1"
                            aria-expanded={isNavVisible}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns=" "
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        id="navbar-sticky1"
                        className={`items-center  justify-between  w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block  ' : 'hidden'
                            }`}
                    >
                        <ul className="navcar flex flex-col p-4 md:py-1.5 mt-4 Gsemibold border border-[#f7b149] md:rounded-[50px] rounded-lg md:space-x-[3vmax] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white text-base tablet:bg-gray-950">
                            <li className='md:hover:border-b-2 md:border-[#f7b149] md:hover:text-lg tablet:border-b-[1px] border-[#f7b149]  text-base '>
                                <Link to="/" onClick={closeMenu}>
                                    <h3 className=" tracking-wide block py-2 px-3 text-white  text-base hover:bg-gray-700 md:hover:bg-transparent md:p-0 dark:border-gray-700 hover:text-[#f7b149] font-outfit">Home</h3>
                                </Link>
                            </li>
                            <li className='md:hover:border-b-2 md:border-[#f7b149] tablet:border-b-[1px] border-[#f7b149]   '>
                                <Link to="/?=about-us" onClick={closeMenu}>
                                    <h3 className=" tracking-wide font-normal block py-2 px-3 text-white   hover:bg-gray-700 md:hover:bg-transparent md:p-0  dark:border-gray-700 hover:text-[#f7b149]  font-outfit   ">About</h3>
                                </Link>
                            </li>

                            <li className='md:hover:border-b-2 md:border-[#f7b149] tablet:border-b-[1px] border-[#f7b149]  '>
                                <Link to="/?=usecase" onClick={closeMenu}  >
                                    <h3 className=" tracking-wide font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#f7b149] font-outfit ">Usecase</h3>
                                </Link>
                            </li>

                            <li className='md:hover:border-b-2 md:border-[#f7b149] tablet:border-b-[1px] border-[#f7b149]  '>
                                <Link to="/Tokenomics" onClick={closeMenu}>
                                    <h3 className=" tracking-wide font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#f7b149] font-outfit ">Tokenomics</h3>
                                </Link>
                            </li>
                            <li className='md:hover:border-b-2 md:border-[#f7b149] tablet:border-b-[1px] border-[#f7b149]  '>
                                <Link to="/Roadmap" onClick={closeMenu}>
                                    <h3 className=" tracking-wide font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#f7b149] font-outfit ">Roadmap</h3>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar