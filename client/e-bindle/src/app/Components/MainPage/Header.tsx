// Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Drawer from "react-modern-drawer";
import Marquee from "react-fast-marquee";
import "react-modern-drawer/dist/index.css";
import QuoteModal from "./QoteModal";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [headerState, setHeaderState] = useState<
    "initial" | "hidden" | "visible"
  >("initial");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50 && currentScrollY <= 100) {
        setHeaderState("hidden");
      } else if (currentScrollY > 100) {
        setHeaderState("visible");
      } else {
        setHeaderState("initial");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass =
    headerState === "visible" ? "bg-blue-600 shadow-md" : "bg-[#fafafa]";
  const textClass = headerState === "visible" ? "text-white" : "text-black";
  const navLinkClass = `font-medium px-4 py-2 rounded transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600 ${textClass}`;

  // Show header (logo/nav) when not hidden
  const showHeader = headerState !== "hidden";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        headerState === "initial"
          ? "top-0"
          : headerState === "hidden"
          ? "-top-24"
          : "top-0"
      } ${bgClass} p-0 overflow-x-hidden`}
    >
      {/* Marquee - only visible in 'initial' state */}
      {headerState === "initial" && (
        <Marquee
          speed={100}
          gradient={true}
          gradientColor="250,250,250"
          gradientWidth={80}
          pauseOnHover
          className="h-9 bg-blue-600 border-b border-blue-500"
        >
          <div className="flex items-center gap-8 mx-4 text-xs lg:text-[1.95vmin] font-normal text-white">
            <span>🚀 Welcome to E-Bindle!</span>
            <span>🌐 Your one-stop IT solution provider</span>
            <span>📞 Contact: +91 89008980809 </span>
            <span>📧 Email ebindle.info@gmail.com </span>
            <span>💡 Get your free quote today! </span>
          </div>
        </Marquee>
      )}

      {/* Main Header (Logo + Nav) - visible when not hidden */}
      {showHeader && (
        <div className="max-w-7xl mx-auto flex items-center justify-between px-1 md:px-5 py-2 lg:py-3">
          {/* Logo + Text */}
          <div className="flex items-center gap-2">
            {/* Logo icon */}
            <span
              className="inline-block align-middle z-[200] relative transition-all duration-300"
              style={{
                marginLeft: headerState === "visible" ? "-8px" : "0",
              }}
            >
              <Image
                src={
                  headerState === "visible"
                    ? "/images/EBindleBlue.jpg"
                    : "/images/EBindleWhite1.jpg"
                }
                alt="E-Bindle Logo"
                width={42}
                height={42}
                priority
                className={`transition-all duration-300 ${
                  headerState === "visible" ? "scale-110" : "scale-100"
                }`}
              />
            </span>
            {/* Text for initial state */}
            {headerState !== "visible" && (
              <span
                className={`font-bold tracking-tight ${textClass} text-md lg:text-2xl`}
                style={{ marginLeft: 0, marginTop: 0, alignSelf: "center" }}
              >
                E-Bindle
              </span>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 ml-5">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={navLinkClass}>
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className={`ml-2 border-2 border-blue-600 rounded px-4 py-2 font-semibold transition-colors duration-200 ${
                headerState === "visible"
                  ? "bg-white text-blue-600 hover:bg-blue-100"
                  : "bg-transparent text-blue-600 hover:bg-blue-50"
              }`}
            >
              Get A Quote
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded focus:outline-none ${textClass}`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Mobile Drawer */}
      <Drawer
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        direction="left"
        className="drawer"
        size={270}
        duration={300}
        overlayOpacity={0.5}
      >
        <div className="h-full bg-white flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <span className="font-bold text-lg">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 px-2 text-black rounded hover:bg-blue-50 hover:text-blue-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setIsQuoteModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block mt-2 border-2 border-blue-600 rounded px-4 py-2 text-blue-600 font-semibold text-center hover:bg-blue-50"
                >
                  Get A Quote
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </Drawer>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onRequestClose={() => setIsQuoteModalOpen(false)}
      />
    </header>
  );
};

export default Header;
