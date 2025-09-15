import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-gray-800">
      <a
        href="https://github.com/MuhammadSaim32"
        className="flex items-center text-[clamp(0.8rem,2.5vw,1.3rem)] text-gray-300 hover:text-white"
        target="_blank"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="mr-3 text-[clamp(0.8rem,2.5vw,1.2rem)]"
        />
        Developed by Muhammad Saim
      </a>
    </footer>
  );
}

export default Footer;
