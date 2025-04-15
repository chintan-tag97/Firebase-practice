import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-400 to-pink-300 bg-opacity-75 shadow-lg ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Flowbite
          </span>


        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-2 md:flex-row md:space-x-8 text-white ">

          <li>
              <Link
                to="/design"
                className="hover:text-red-600 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-600 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-red-600 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/datatable"
                className="hover:text-red-600 transition duration-300"
              >
                Datatable
              </Link>
            </li>
            <li>
              <Link
                to="/sidebar"
                className="hover:text-red-600 transition duration-300"
              >
                Sidebar
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-red-600 transition duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
