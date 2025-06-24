/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RoomCarousel = ({ data = [], heading = "Our Rooms Categories" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [groupSize, setGroupSize] = useState(getGroupSize());
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  function getGroupSize() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 1200) return 2;
    return 3;
  }

  const totalGroups = Math.ceil(data.length / groupSize);

  useEffect(() => {
    const handleResize = () => {
      const newSize = getGroupSize();
      setGroupSize(newSize);
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleRooms = () => {
    const start = currentIndex * groupSize;
    return data.slice(start, start + groupSize);
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalGroups);
    }, 3500);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [groupSize]);

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      clearInterval(intervalRef.current);
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      startAutoSlide();
    }
  };

  // Swipe Support
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;

    const handleMouseDown = (e) => {
      startX = e.clientX;
    };

    const handleMouseUp = (e) => {
      const diff = e.clientX - startX;
      if (Math.abs(diff) > 50) {
        clearInterval(intervalRef.current);
        if (diff < 0) {
          setDirection(1);
          setCurrentIndex((prev) => (prev + 1) % totalGroups);
        } else {
          setDirection(-1);
          setCurrentIndex((prev) =>
            prev - 1 < 0 ? totalGroups - 1 : prev - 1
          );
        }
        startAutoSlide();
      }
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, [currentIndex, totalGroups]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="w-full shadow-md pt-10 pb-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl mb-5 text-center font-serif">
          {heading}
        </h2>

        <div
          ref={containerRef}
          className="relative w-full h-[410px] flex justify-center items-center select-none"
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex justify-center cursor-move gap-4 w-full absolute top-0 left-0"
            >
              {getVisibleRooms().map((room) => (
                <div
                  key={room.id}
                  className="flex flex-col items-center p-3 bg-white rounded shadow"
                  style={{
                    width:
                      groupSize === 1
                        ? "100%"
                        : groupSize === 2
                        ? "48%"
                        : "30%",
                    height: "380px",
                    minWidth: "280px",
                  }}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full object-cover mb-4 rounded"
                    style={{ height: "200px" }}
                  />
                  <h6 className="text-lg mb-2 text-center cursor-pointer font-serif relative group">
                    {room.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
                  </h6>
                  <p
                    className="text-gray-600 text-sm px-2 text-justify leading-6"
                    style={{
                      height: "100px",
                      overflowY: "auto",
                      marginBottom: "0.5rem",
                      width: "100%",
                      scrollbarWidth: "thin",
                    }}
                  >
                    {room.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 cursor-pointer rounded-full ${
                i === currentIndex ? "bg-black" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(i)}
              style={{ transition: "background 0.3s" }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};


export default RoomCarousel;
