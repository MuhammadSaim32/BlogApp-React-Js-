import React from "react";

function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-gray-800">
      <div className="text-center">
        <a
          href="https://github.com/MuhammadSaim32"
          className="flex items-center text-gray-300 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.699 1.03 1.592 1.03 2.683 0 3.842-2.337 4.687-4.565 4.936.36.31.682.92.682 1.855 0 1.338-.012 2.42-.012 2.75 0 .268.18.58.688.482C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          Developed by Muhammad Saim
        </a>
      </div>
    </footer>
  );
}

export default Footer;
