
// import React from "react"; // removed unused
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 flex flex-col items-center animate-fade-in">
  <SocialLinks />
      <div className="text-center text-xs opacity-60">
        &copy; {new Date().getFullYear()} Poovalingam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
