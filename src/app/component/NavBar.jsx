
import React from "react";
import NavLink from "./buttons/NavLink";

const NavBar = () => {
  return (
    <div>
  <div className="navbar bg-emerald-600 text-white shadow-md px-4">

    {/* Left Section */}
    <div className="navbar-start">

      {/* Mobile Dropdown */}
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white hover:bg-emerald-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 w-56 rounded-xl 
                     bg-white text-gray-800 shadow-xl p-3 z-50"
        >
          <li>
            <NavLink href="/" className="rounded-lg hover:bg-emerald-50 hover:text-emerald-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/services" className="rounded-lg hover:bg-emerald-50 hover:text-emerald-600">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" className="rounded-lg hover:bg-emerald-50 hover:text-emerald-600">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/my-booking" className="rounded-lg hover:bg-emerald-50 hover:text-emerald-600">
              My Booking
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <NavLink className="text-2xl font-bold tracking-wide" href="/">
        CareConnect
      </NavLink>
    </div>

    {/* Center (Desktop Menu) */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-2 font-medium">

        <li>
          <NavLink
            href="/"
            className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-700"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            href="/services"
            className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-700"
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            href="/about"
            className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-700"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            href="/my-booking"
            className="px-4 py-2 rounded-lg transition-all duration-200 hover:bg-emerald-700"
          >
            My Booking
          </NavLink>
        </li>

      </ul>
    </div>

    {/* Right Section */}
    <div className="navbar-end">
      <button className="btn bg-white text-emerald-600 hover:bg-emerald-100 border-none rounded-xl">
        Login
      </button>
    </div>

  </div>
</div>

  );
};

export default NavBar;
