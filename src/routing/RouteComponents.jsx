import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../componsnts/Header/Header";
import Footer from "./../componsnts/Footer/Footer";
import ImageSlider from "./../componsnts/ImageSlider/ImageSlider";
import Testimonial from "../componsnts/Testimonial/Testimonial";
import AboutHeroSection from "./../componsnts/AboutHeroSection/AboutHeroSection";
import Buttons from "./../componsnts/Buttons/Buttons";
import Faqs from "../componsnts/Faqs/Faqs";
import ContinuesSlider from "../componsnts/ContinuesSlider/ContinuesSlider";
import RouteTable from "../componsnts/RouteTable/RouteTable";
import ContactTouchUs from "../componsnts/ContactTouchUs/ContactTouchUs";
import Certificate from "../componsnts/Certificate/Certificate";
import GalleyImages from "../componsnts/GalleyImages/GalleyImages";
import CoutingSection from "../componsnts/CoutingSection/CoutingSection";
import Popup from "./../componsnts/Popup/Popup";
import Pagination from "./../componsnts/Pagination/Pagination";
import Demo from "../componsnts/Popup/Demo";

const RouteComponents = () => {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about-hero-section" element={<AboutHeroSection />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/continues-slider" element={<ContinuesSlider />} />
        <Route path="/contact-touch-us" element={<ContactTouchUs />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/galleyImages" element={<GalleyImages />} />
        <Route path="/couting-section" element={<CoutingSection />} />
        <Route path="/popup" element={<Demo />} />
        <Route path="/pagination" element={<Pagination />} />
      </Routes>
      <RouteTable />
      {/* <Footer /> */}
    </div>
  );
};

export default RouteComponents;
