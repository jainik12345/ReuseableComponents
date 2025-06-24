/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/Images/about_image_1.webp";
import image2 from "../../assets/images/about_image_2.webp";
import image3 from "../../assets/images/about_image_1.webp";
import image4 from "../../assets/images/about_image_2.webp";
import image5 from "../../assets/images/about_image_1.webp";
import image6 from "../../assets/images/about_image_2.webp";

const aboutSections = [
  {
    title: "Welcome to Renest Hotels and Resorts",
    description:
      "Renest Hotels & Resorts offers unique boutique accommodations",
    images: [image1, image2, image3],
    textSide: "left",
  },
  {
    title: "What makes us Unique",
    description:
      "We care deeply about our people and the ecosystems they are a",
    images: [image4, image5, image6],
    textSide: "right",
  },
  {
    title: "Our History",
    description: "Spearheaded by Mr Rajkumar Rai, Unique Mercantile India Ltd",
    images: [image1],
    textSide: "left",
  },
];

// IMAGE GRID (reusable)
function AboutImageGrid({ images, onImageClick }) {
  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt="Section"
        className="w-full h-72 object-cover rounded-lg"
        style={{ cursor: "default" }}
      />
    );
  }
  return (
    <motion.div
      className="md:w-[100%] w-full flex flex-col space-y-4"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <img
          src={images[0]}
          alt="Main"
          className="w-full h-50 object-cover rounded-lg cursor-pointer"
          onClick={() => onImageClick(0, images)}
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="md:w-1/2 w-full">
          <img
            src={images[1]}
            alt="Second"
            className="w-full h-45 object-cover rounded-lg cursor-pointer"
            onClick={() => onImageClick(1, images)}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <img
            src={images[2]}
            alt="Third"
            className="w-full h-45 object-cover rounded-lg cursor-pointer"
            onClick={() => onImageClick(2, images)}
          />
        </div>
      </div>
    </motion.div>
  );
}

// MODAL (reusable)
function AboutImageModal({
  isModalOpen,
  closeModal,
  modalImages,
  currentImageIndex,
  goToPreviousImage,
  goToNextImage,
  direction,
  imageVariants,
  modalVariants,
}) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xl p-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            className={`relative bg-transparent rounded-lg w-full max-w-[100%] max-h-[100%] md:h-[100%] flex flex-col justify-center items-center shadow-xl`}
          >
            <button
              className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-black cursor-pointer"
              onClick={closeModal}
            >
              <IoClose />
            </button>

            <div className="relative flex items-center justify-between w-full px-4 md:px-6 gap-4 overflow-hidden">
              <button
                className="text-2xl text-gray-700 hover:text-black transition cursor-pointer z-10"
                onClick={goToPreviousImage}
              >
                <FaArrowLeft />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  key={currentImageIndex}
                  src={modalImages[currentImageIndex]}
                  alt={`Modal ${currentImageIndex + 1}`}
                  className="max-h-[70vh] w-full object-contain rounded-lg"
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                />
              </div>

              <button
                className="text-2xl text-gray-700 hover:text-black transition cursor-pointer z-10"
                onClick={goToNextImage}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
    transition: { duration: 0.5 },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.4 },
  }),
};

const AboutHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);
  const [direction, setDirection] = useState(0);

  const openModal = (index, imagesArray) => {
    if (window.innerWidth <= 768) return;
    setCurrentImageIndex(index);
    setModalImages(imagesArray);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalImages.length);
  };

  const goToPreviousImage = () => {
    setDirection(-1);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + modalImages.length) % modalImages.length
    );
  };

  return (
    <>
      <div className="relative pt-10 pb-10 ">
        {aboutSections.map((section, idx) => {
          const flexDirection =
            section.textSide === "left" ? "md:flex-row" : "md:flex-row-reverse";

          return (
            <motion.div
              className={`w-full py-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 + idx * 0.2 }}
              key={idx}
            >
              <div
                className={`max-w-[1250px] mx-auto flex flex-col ${flexDirection} items-center justify-between px-4 md:px-10 gap-10`}
              >
                <motion.div
                  className="md:w-2/3 w-full text-center md:text-left flex items-center"
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h1 className="text-2xl md:text-2xl font-bold mb-4 text-center">
                      {section.title}
                    </h1>
                    <p className="text-base md:text-[16px] text-justify leading-8">
                      {section.description}
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="md:w-[40%] w-full"
                >
                  <AboutImageGrid
                    images={section.images}
                    onImageClick={openModal}
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}

        {/* Modal */}
        <AboutImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalImages={modalImages}
          currentImageIndex={currentImageIndex}
          goToPreviousImage={goToPreviousImage}
          goToNextImage={goToNextImage}
          direction={direction}
          imageVariants={imageVariants}
          modalVariants={modalVariants}
        />
      </div>
    </>
  );
};

export default AboutHeroSection;
