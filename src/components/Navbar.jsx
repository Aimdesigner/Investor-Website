import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ scrolled }) => {

    const navLinks = [
        { to: "/personal-investors", label: "Personal investors" },
        { to: "/retirement", label: "Retirement plans" },
        { to: "/financial-advisors", label: "Financial professionals" },
        { to: "/institutional", label: "Institutional investors" }
    ];



    return (

        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 transition-discrete duration-300" style={{ marginLeft: scrolled ? '191px' : '0px',}}>
            {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="hover:text-red-700">
                    {link.label}
                </Link>
            ))}
        </nav>

    )
}

export default Navbar