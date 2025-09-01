import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import Navbar from "./Navbar";

function Header({ setShowLogin, setShowOpenAccount }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mobNavLinks = [
        { to: "/personal-investors", label: "Personal investors" },
        { to: "/retirement", label: "Retirement plans" },
        { to: "/financial-advisors", label: "Financial professionals" },
        { to: "/institutional", label: "Institutional investors" }
    ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 52);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "fixed" : "static"
      } top-0 left-0 w-full z-50 transition-all duration-300 bg-white`}
    >
      {/* Top header — hidden when scrolled */}
      <div
        className={`transition-opacity duration-400 ${ 
          scrolled ? "md:opacity-0 md:h-0 overflow-hidden" : "opacity-100 h-auto"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4 ">
          {/* Logo + tagline */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-3xl font-bold text-red-700">
              Vanguard
            </Link>
            <p className="text-neutral-700 border-l pl-2 ml-2">
              Personal investors
            </p>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/search">Search</Link>
            <Link to="/support">Support</Link>
            <button onClick={() => setShowLogin(true)}>Sign In</button>
            <button
              onClick={() => setShowOpenAccount(true)}
              className="border px-3 py-1 rounded hover:bg-black hover:text-white"
            >
              Open an account
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-t-gray-200">
        <div className="container mx-auto flex items-center  min-[991px]:py-5 px-4 relative max-[767px]:hidden">
          {scrolled && (
            <Link
              to="/"
              className="text-3xl font-bold text-red-700 duration-300 absolute top-0"
              style={{
                transform: "translateY(28%)",
                zIndex: 1,
              }}
            >
              Vanguard
            </Link>
          )}
          <Navbar scrolled={scrolled} />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col space-y-3 p-4 font-medium text-gray-700">
            {mobNavLinks.map(link => (
                            <Link key={link.to} to={link.to} className="hover:text-red-700">
                                {link.label}
                            </Link>
                        ))}
            <Link to="/search" onClick={() => setMenuOpen(false)}>
              Search
            </Link>
            <Link to="/support" onClick={() => setMenuOpen(false)}>
              Support
            </Link>
            <button onClick={() => { setShowLogin(true); setMenuOpen(false); }}>
              Sign In
            </button>
            <button
              onClick={() => { setShowOpenAccount(true); setMenuOpen(false); }}
              className="border px-3 py-1 rounded hover:bg-black hover:text-white"
            >
              Open an account
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
