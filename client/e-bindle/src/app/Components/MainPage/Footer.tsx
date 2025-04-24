/* eslint-disable @next/next/no-html-link-for-pages */
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-1 relative bg-[#1665d8] text-white overflow-hidden">
      {/* Responsive Wave SVG at the top */}
      <div className="w-full relative" style={{ zIndex: 1 }}>
        <svg
          viewBox="0 0 1440 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[110px]"
          preserveAspectRatio="none"
        >
          {/* Main wave */}
          <path d="M0,60 C360,110 1080,0 1440,80 L1440,0 L0,0 Z" fill="#fff" />
          {/* Lighter overlay wave for depth */}
          <path
            d="M0,90 C400,130 1040,10 1440,100 L1440,0 L0,0 Z"
            fill="#fff"
            opacity="0.25"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="lg:pl-8   relative z-10 max-w-7xl mx-auto px-4 pt-12 md:pt-24 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-bold">E-Bindle</span>
          </div>
          <p className="text-sm mb-4">
   Your one stop destination
            <br />
            for all your digital needs
            <br />
            and e-solutions.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#">
              <FaFacebookF className="w-8 h-8 p-2 rounded bg-white/20 hover:bg-white/40 transition" />
            </a>
            <a href="#">
              <FaInstagram className="w-8 h-8 p-2 rounded bg-white/20 hover:bg-white/40 transition" />
            </a>
            <a href="#">
              <FaTwitter className="w-8 h-8 p-2 rounded bg-white/20 hover:bg-white/40 transition" />
            </a>
            <a href="#">
              <FaYoutube className="w-8 h-8 p-2 rounded bg-white/20 hover:bg-white/40 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
               Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
           
          </ul>
        </div>

        {/* Popular Posts */}
        <div>
          <h3 className="font-semibold mb-4">Rules and Polices</h3>
          <div className="flex items-start gap-3 mb-4">
          <a href="/privacy" className="hover:underline text-xs">
            Privacy Policy
          </a>
        
          </div>
          <div className="flex items-start gap-3">
          <a href="/terms" className="hover:underline text-xs">
            Terms & Conditions
          </a>
            </div>
    </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <div className="mb-3">
            <span className="block text-sm font-bold">Location</span>
            <span className="text-xs text-gray-200">
              IIMT LBF Incubation Center, 2nd Floor, Greater Noida, UP, 201310
            </span>
          </div>
          <div className="mb-3">
            <span className="block text-sm font-bold">Email Us</span>
            <span className="text-xs text-gray-200">info@e-bindle.com</span>
          </div>
          <div>
            <span className="block text-sm font-bold">Phone Us</span>
            <span className="text-xs text-gray-200">+91 000000000</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pb-6 relative z-10 border-t border-blue-300/30 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 text-xs text-gray-200">
        <span>© 2025 E-Bindle. All Rights Reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <span>/</span>
          <a href="/terms" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
