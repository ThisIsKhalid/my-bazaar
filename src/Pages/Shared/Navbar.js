import React, { useState } from "react";
import { FaBars, FaSignInAlt, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const menuList = (
    <>
      {/* --------------home----------------- */}
      <li className="dropdown dropdown-hover">
        <label tabIndex={0} className="font-semibold hover:line-through">
          Home
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu shadow bg-base-100 w-40"
        >
          <li>
            <Link to="/">Main Home</Link>
          </li>
          <li>
            <Link to="/">Modern Shop</Link>
          </li>
        </ul>
      </li>
      {/* ------------------pages-------------------- */}
      <li className="dropdown dropdown-hover">
        <label tabIndex={1} className="font-semibold hover:line-through">
          Pages
        </label>
        <ul
          tabIndex={1}
          className="dropdown-content menu shadow bg-base-100 w-40"
        >
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Meet the Team</Link>
          </li>
        </ul>
      </li>

      {/* -------------------blogs------------------ */}
      <li className="dropdown dropdown-hover lg:dropdown-end lg:dropdown-bottom">
        <label tabIndex={2} className="font-semibold hover:line-through">
          Shop
        </label>
        <ul
          tabIndex={2}
          className="dropdown-content menu shadow bg-base-100 lg:w-[500px] flex lg:flex-row flex-col gap-10 justify-between p-5"
        >
          <ul>
            <li className="font-medium">Shop Types</li>
          </ul>
          <ul>
            <li className="font-medium">Shop Layouts</li>
          </ul>
          <ul>
            <li className="font-medium">Product Types</li>
          </ul>
        </ul>
      </li>

      <li className="font-semibold hover:line-through">
        <Link to="/blog">Blog</Link>
      </li>
      <li className="font-semibold hover:line-through">
        <Link to="/elements">Elements</Link>
      </li>
      <li className="font-semibold">
        <FaSearch />
      </li>
    </>
  );

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="relative flex items-center justify-between">
        <Link className="text-2xl font-extrabold text-gray-800 uppercase line-through">
          My Bazaar
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">{menuList}</ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className="w-5 h-5 text-gray-800" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link className="text-2xl font-extrabold text-gray-800 uppercase line-through">
                      My Bazaar
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaSignInAlt className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul
                    className="space-y-4 flex flex-col"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {menuList}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
