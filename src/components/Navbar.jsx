import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="w-full h-[90px] bg-black ">
            <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
                <div>
                    <h1 className="text-[var(--primary-blue)]">TradeX</h1>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex text-white items-center  ">
                        <li>Platform</li>
                        <li>Development</li>
                        <li>community</li>
                        <li>About</li>
                        <button className="ml-4">Login</button>
                    </ul>
                </div>
                {/* ---hamburger menu--- */}
                <div onClick={handleNav} className="block md:hidden ">
                    {!nav ? (
                        <AiOutlineMenu className="text-white cursor-pointer " size={30} />
                    ) : (
                        <AiOutlineClose className="text-white cursor-pointer " size={30} />
                    )}
                </div>
                {/* -----mobile menu----- */}
                <div className={nav ? "w-full bg-black text-white absolute top-[90px] left-0 flex  justify-center text-center" : "absolute top-[-100%]" } >
                    <ul>
                        <li className="text-2xl">Platform</li>
                        <li className="text-2xl">Development</li>
                        <li className="text-2xl">community</li>
                        <li className="text-2xl">About</li>
                        <button className="m-8 px-8">Use TradeX</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
