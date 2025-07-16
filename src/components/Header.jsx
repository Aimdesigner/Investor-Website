import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        // <header className="shadow-md sticky top-0 bg-white z-50">
        //     <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        //         {/* Logo */}
        //         <div className="text-xl font-bold text-red-700">
        //             <Link to="/">Vanguard</Link>
        //         </div>

        //         <Navbar />

        //         {/* Right Side */}
        //         <div className="flex items-center space-x-4">
        //             <Link
        //                 to="/login"
        //                 className="text-sm font-medium text-red-700 hover:underline"
        //             >
        //                 Log in
        //             </Link>
        //             <button className="bg-red-700 text-white text-sm px-4 py-1 rounded hover:bg-red-800">
        //                 Open an account
        //             </button>
        //         </div>
        //     </div>
        // </header>

        // <header className="border-b shadow-sm">
        //     {/* Top Row */}
        //     <div className="container">
        //         <div className="flex items-center justify-between px-0 py-3 text-sm ">
        //             <div className="flex items-center gap-2">
        //                 <div className="font-bold text-red-700 text-sm ">
        //                     <Link to="/" className="text-3xl">Vanguard</Link>
        //                 </div>
        //                 <span className="text-gray-500 border-l pl-2 ml-2">Personal investors</span>
        //             </div>
        //             <div className="flex items-center gap-6">
        //                 <div className="flex items-center gap-1 text-gray-700 hover:text-black cursor-pointer">
        //                     {/* <FaRegBookmark /> */}
        //                     <span>My saves</span>
        //                 </div>
        //                 <div className="flex items-center gap-1 text-gray-700 hover:text-black cursor-pointer">
        //                     {/* <FaSearch /> */}
        //                     <span>Search</span>
        //                 </div>
        //                 <div className="flex items-center gap-1 text-gray-700 hover:text-black cursor-pointer">
        //                     {/* <FaQuestionCircle /> */}
        //                     <span>Support</span>
        //                 </div>
        //                 <div className="flex items-center gap-1 text-gray-700 hover:text-black cursor-pointer">
        //                     {/* <FaSignInAlt /> */}
        //                     <span>Log in</span>
        //                 </div>
        //                 <button className="flex items-center gap-1 border border-black px-3 py-1 rounded-full hover:bg-gray-100">
        //                     {/* <FaPlus className="text-sm" /> */}
        //                     <span className="text-sm font-semibold">Open an account</span>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>


        //     {/* Bottom Nav */}
        //     <Navbar />
        // </header>


        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            {/* Top header—hidden when scrolled */}
            <div className={`bg-white-full transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
                <div className="container mx-auto flex items-center justify-between py-2 px-4">
                    <Link to="/" className="text-3xl font-bold text-red-700">Vanguard</Link>
                    {/* Optional top elements */}
                </div>
            </div>

            {/* Bottom nav—hidden initially */}
            <nav className={`bg-white w-full border-t transition-transform duration-300 ${scrolled ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className="container mx-auto flex items-center justify-between py-2 px-4">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-3xl font-bold text-red-700">Vanguard</Link>
                        <Link to="/" className="text-red-500 border-l pl-2 ml-2 ">Personal investors</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/search">Search</Link>
                        <Link to="/support">Support</Link>
                        <Link to="/login">Log in</Link>
                        <button className="border px-3 py-1 rounded">Open an account</button>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;