/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

// NAVIGATION ITEMS CONFIG
const NAV_ITEMS = [
  { label: "Home", to: "/header" },
  { label: "About", to: "/about" },
  {
    label: "Our Hotels",
    dropdown: [
      { city: "Jaipur", hotel: "Renest Jaipur", to: "/hotels/jaipur" },
      { city: "Tirupati", hotel: "Renest Tirupati", to: "/hotels/tirupati" },
      {
        city: "Shirdi",
        hotel: "Renest Shraddha Inn Shirdi",
        to: "/hotels/shirdi",
      },
      {
        city: "Gandhidham",
        hotel: "Renest Gandhidham",
        to: "/hotels/gandhidham",
      },
      {
        city: "Manali",
        hotel: "Renest River Country Resort Manali",
        to: "/hotels/manali",
      },
      { city: "Haridwar", hotel: "Renest Haridwar", to: "/hotels/haridwar" },
      {
        city: "Mussoorie",
        hotel: "Renest Dunsvirk Court Mussoorie",
        to: "/hotels/mussoorie",
      },
      { city: "Goa", hotel: "Renest Calangute Goa", to: "/hotels/goa" },
    ],
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const logoUrl = "https://renesthotels.com/images/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  // Helper: check if nav item is active
  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <header className="w-full  border-b border-slate-200 bg-white z-50 font-['Roboto']">
        <div className="max-w-7xl mx-auto flex items-center px-4 md:px-8 py-2 md:py-4 justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex-shrink-0 flex flex-col items-center min-w-[110px]"
          >
            <img
              src={logoUrl}
              alt="Logo"
              className="w-20 h-12 object-contain"
              draggable={false}
            />
            <span className="text-xs text-neutral-700 tracking-wide mt-1">
              Hotels & Resorts
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium text-base focus:outline-none relative group`}
                    tabIndex={0}
                    type="button"
                  >
                    {item.label}
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      size={14}
                    />
                    {/* Underline */}
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 18 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                          duration: 0.2,
                        }}
                        className="absolute left-0 top-full mt-3 z-30 w-80 bg-white shadow-2xl rounded-lg py-2 border border-slate-100"
                      >
                        {item.dropdown.map((hotel) => (
                          <NavLink
                            to={hotel.to}
                            key={hotel.city}
                            className={({ isActive }) =>
                              `block px-6 py-3.5 hover:bg-slate-100 transition rounded text-left cursor-pointer
                               ${
                                 isActive
                                   ? "bg-slate-100 font-semibold text-green-700"
                                   : "text-slate-900"
                               }`
                            }
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span className="font-bold text-slate-900">
                              {hotel.city}
                            </span>
                            <br />
                            <span className="text-sm font-normal text-slate-700">
                              {hotel.hotel}
                            </span>
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive: isNavActive }) =>
                    `relative font-medium text-base cursor-pointer transition py-1.5 px-2 outline-none
                    ${
                      isNavActive || isActive(item.to)
                        ? "text-green-700"
                        : "text-slate-900"
                    }
                    group`
                  }
                  tabIndex={0}
                >
                  {item.label}
                  {/* Underline Animation */}
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded group-[.active]:scale-x-100" />
                </NavLink>
              )
            )}
          </nav>

          {/* Hamburger & Cross - Mobile */}
          <div className="flex md:hidden">
            <button
              className="text-2xl text-slate-900 p-2 transition"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              style={{
                minWidth: 40,
                minHeight: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="fixed inset-0 bg-black z-[101]"
                onClick={() => setMobileOpen(false)}
              />
              {/* Drawer */}
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 35,
                  duration: 0.24,
                }}
                className="fixed top-0 left-0 h-full w-[92vw] max-w-sm bg-white z-[102] shadow-2xl px-6 py-7 sm:px-8 sm:py-10 overflow-y-auto"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                <div className="flex items-center justify-between mb-7">
                  <NavLink to="/" onClick={() => setMobileOpen(false)}>
                    <img
                      src={logoUrl}
                      alt="Logo"
                      className="w-16 h-10 object-contain"
                      draggable={false}
                    />
                    <span className="text-xs text-neutral-700 tracking-wide mt-1">
                      Hotels & Resorts
                    </span>
                  </NavLink>
                  {/* Cross icon is not repeated here, it's only in hamburger position */}
                </div>
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) =>
                    item.dropdown ? (
                      <li key={item.label}>
                        <button
                          className="flex items-center gap-2 w-full text-left font-semibold text-slate-900 text-lg sm:text-xl py-2 focus:outline-none"
                          onClick={() => setMobileDropdownOpen((open) => !open)}
                          aria-expanded={mobileDropdownOpen}
                          type="button"
                        >
                          {item.label}
                          <FaChevronDown
                            className={`transition-transform duration-200 ${
                              mobileDropdownOpen ? "rotate-180" : ""
                            }`}
                            size={14}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-3 border-l border-slate-200 mb-2"
                            >
                              {item.dropdown.map((hotel) => (
                                <li key={hotel.city} className="mb-3 last:mb-0">
                                  <NavLink
                                    to={hotel.to}
                                    className={({ isActive }) =>
                                      `block font-bold text-base sm:text-lg text-slate-900 py-1.5
                                        ${isActive ? "text-green-700" : ""}`
                                    }
                                    onClick={() => {
                                      setMobileOpen(false);
                                      setMobileDropdownOpen(false);
                                    }}
                                  >
                                    {hotel.city}
                                    <span className="block font-normal text-slate-700 text-xs sm:text-sm">
                                      {hotel.hotel}
                                    </span>
                                  </NavLink>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            `font-medium text-slate-900 text-lg sm:text-xl py-2 block cursor-pointer ${
                              isActive ? "text-green-700" : ""
                            }`
                          }
                          tabIndex={0}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Underline animation styling and responsive font */}
      <style>{`
        .group:hover > span,
        .group:focus-within > span {
          transform: scaleX(1) !important;
        }
        @media (max-width: 768px) {
          header {
            font-size: 15px;
          }
          .sm\\:text-xl {
            font-size: 1.125rem !important;
          }
          .sm\\:text-lg {
            font-size: 1rem !important;
          }
          .sm\\:text-sm {
            font-size: 0.925rem !important;
          }
          .sm\\:px-8 {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          .sm\\:py-10 {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
