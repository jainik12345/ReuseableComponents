/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
];

const SERVICES = [
  "Web Development",
  "Graphic Design",
  "SEO Services",
  "Social Media Marketing",
];

const Footer = () => {
  return (
    <motion.div
      className="bg-gray-900 p-5 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% of footer enters
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MyCompany</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We provide top-notch digital solutions to help your business grow
            and stand out online.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={link.to}
                  className="text-sm text-gray-300 hover:text-white transition"
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services Dropdown Hover */}
        <div className="relative group">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {SERVICES.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              <span>+91 12345-67890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <span>example@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              <span>123 Main Street, City, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-white text-xl p-3 bg-gray-800 rounded-full hover:bg-white hover:text-gray-900 shadow-md transition-all"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </motion.div>
  );
};

export default Footer;
