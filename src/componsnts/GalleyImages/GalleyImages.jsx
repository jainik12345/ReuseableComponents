/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import img1 from "../../assets/Images/about_image_1.webp";
import img2 from "../../assets/Images/about_image_2.webp";

const galleryData = [
  {
    title: "Rooms",
    images: [img1, img2, img1],
  },
  {
    title: "Lobby",
    images: [img2, img1, img2],
  },
  {
    title: "Pool",
    images: [img1, img2, img1],
  },
  {
    title: "Restaurant",
    images: [img2, img1, img2],
  },
];

const GalleyImages = () => {
  const [activeSection, setActiveSection] = useState("All");

  const [popupOpen, setPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  // Get filtered images
  const filteredImages =
    activeSection === "All"
      ? galleryData.flatMap((section) => section.images)
      : galleryData.find((section) => section.title === activeSection)
          ?.images || [];

  const openPopup = (index) => {
    setCurrentImages(filteredImages);
    setCurrentImageIndex(index);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + currentImages.length) % currentImages.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  return (
    <div className="flex flex-col justify-center items-center relative">
      {/* <OursHotelsSubNavbar /> */}

      <div className="w-full shadow-md py-10">
        <div className="max-w-[1440px] mx-auto px-8 space-y-12">
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveSection("All")}
              className={`px-6 py-2 rounded-full border ${
                activeSection === "All"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600"
              } hover:bg-indigo-500 hover:text-white transition`}
            >
              All
            </button>

            {galleryData.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(section.title)}
                className={`px-6 py-2 rounded-full border ${
                  activeSection === section.title
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-indigo-600"
                } hover:bg-indigo-500 hover:text-white cursor-pointer transition`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-indigo-900">
              {activeSection === "All" ? "All Gallery Images" : activeSection}
            </h2>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx}`}
                onClick={() => openPopup(idx)}
                className="w-full h-[250px] object-cover hover:scale-93 cursor-pointer transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Popup */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-[4px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5, opacity: 0, y: 100 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-[90%] max-h-[90%] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute cursor-pointer top-4 right-4 text-white text-2xl"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <img
                src={currentImages[currentImageIndex]}
                alt="Popup"
                className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
              />

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="bg-black bg-opacity-30 p-2 cursor-pointer rounded-full text-white hover:bg-opacity-60"
                >
                  <FaArrowLeft size={30} />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="bg-black bg-opacity-30 p-2 cursor-pointer rounded-full text-white hover:bg-opacity-60"
                >
                  <FaArrowRight size={30} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleyImages;
