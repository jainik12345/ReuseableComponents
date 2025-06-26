import { Routes, Route } from "react-router-dom";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import HomePage from "./../../pages/HomePage/HomePage";
import AboutPage from "./../../pages/AboutPage/AboutPage";

const WebsitePage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const RouteComponents = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <WebsitePage>
              <HomePage />
            </WebsitePage>
          }
        />
        <Route
          path="/about-us"
          element={
            <WebsitePage>
              <AboutPage />
            </WebsitePage>
          }
        />
      </Routes>
    </>
  );
};

export default RouteComponents;
