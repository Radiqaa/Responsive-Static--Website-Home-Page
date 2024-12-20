import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black">
      {/* Horizontal Line */}
      <div className="mb-8 border-t border-gray-700"></div>

      <div className="container grid grid-cols-1 px-4 mx-auto gap-y-12 md:grid-cols-3 md:gap-x-12">
        {/* Logo and Description */}
        <div className="md:ml-16">
          {/* Logo */}
          <div className="text-4xl font-bold">
            <span className="text-purple-500">Half</span>Art
          </div>
          <p className="mt-4 text-gray-400">
            The Leading NFT Marketplace On Ethereum Home To The Next Generation
            Of Digital Creators.
          </p>
          {/* Social Icons */}
          <div className="flex mt-4 space-x-4">
          <a
              href="#"
              className="text-gray-400 hover:text-blue-500"
              aria-label="Facebook"
            >
              <i className="text-2xl fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400"
              aria-label="Twitter"
            >
              <i className="text-2xl fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500"
              aria-label="Instagram"
            >
              <i className="text-2xl fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <i className="text-2xl fab fa-linkedin"></i>
            </a>
            
          </div>
          <p className="mt-4 text-gray-600">&copy; 2022 HalfArt. All Rights Reserved</p>
        </div>

        {/* Marketplace Links */}
        <div className="md:ml-16">
          <h3 className="mb-4 font-bold">Marketplace</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Articles
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="md:ml-16">
          <h3 className="mb-4 font-bold">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Tokens
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                API
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Big Bounty
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Become Partners
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
