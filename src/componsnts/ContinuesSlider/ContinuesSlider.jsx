import React from "react";
import client1 from "../../assets/Images/about_image_1.webp";
import client2 from "../../assets/images/about_image_2.webp";
import client3 from "../../assets/images/about_image_1.webp";
import client4 from "../../assets/images/about_image_2.webp";
import client5 from "../../assets/images/about_image_1.webp";
import client6 from "../../assets/images/about_image_2.webp";
import client7 from "../../assets/images/about_image_1.webp";
import client8 from "../../assets/images/about_image_2.webp";
import client9 from "../../assets/images/about_image_1.webp";
import client10 from "../../assets/images/about_image_2.webp";

import "./ContinuesSlider.css";

// Static logo images array
const ClientLogos = [
  { src: client1, alt: "Client 1" },
  { src: client2, alt: "Client 2" },
  { src: client3, alt: "Client 3" },
  { src: client4, alt: "Client 4" },
  { src: client5, alt: "Client 5" },
  { src: client6, alt: "Client 6" },
  { src: client7, alt: "Client 7" },
  { src: client8, alt: "Client 8" },
  { src: client9, alt: "Client 9" },
  { src: client10, alt: "Client 10" },
];

const ContinuesSlider = () => {
  return (
    <div className="client_logo_main_container">
      <h2 className="text-center text-[1.7rem] font-semibold text-white">
        Our Associations, We are recognized by
      </h2>

      <div className="client_logo_content">
        {ClientLogos.concat(ClientLogos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="bg-cover ml-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ContinuesSlider;
