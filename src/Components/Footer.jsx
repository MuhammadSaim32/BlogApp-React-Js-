import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-2">Follow Us On</p>

        <div className="flex justify-center space-x-4 mb-2">
          <Link to="#" className="hover:text-white">
            Facebook
          </Link>
          <Link to="#" className="hover:text-white">
            Twitter
          </Link>
          <Link to="#" className="hover:text-white">
            Instagram
          </Link>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} BlogApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
