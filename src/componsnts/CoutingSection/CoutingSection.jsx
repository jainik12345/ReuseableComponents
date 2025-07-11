import { useEffect, useState } from "react";
import bgimg from "../../assets/Images/about_image_1.webp";
import { FaHotel } from "react-icons/fa6";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}+</span>;
};

const CoutingSection = () => {
  const DetailsDataArr = {
    partners: 74,
    listed_hotels: 25,
    destinations: 32,
    booking: 157,
  };

  const counterDuration = 6000;

  return (
    <div className="section relative">
      <div className="container max-w-screen mx-auto gap-10">
        <div
          className="bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center h-120"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          <div className="header md:w-[70%] w-full text-center flex flex-col gap-5 md:px-20 px-10">
            <h2 className="md:text-[2rem] text-[1.5rem] font-semibold text-white">
              Have you any question? Get A Consultation
            </h2>
            <p className="md:text-[1rem] text-[.8rem] text-gray-200">
              Our team of experienced tour specialists have travelled to
              hundreds of countries around the globe and have decades of
              first-hand travel experience to share. Contact us now to have all
              of your tour-related questions answered!
            </p>
          </div>
        </div>
      </div>

      <div className="lg:py-40 py-10 bg-gray-200 flex justify-center w-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center lg:bg-white items-center md:rounded-2xl rounded-none grid-cols-1 lg:gap-0 gap-5 lg:absolute lg:top-[45%] md:w-fit w-full">
          {/* Card 1 */}
          <div className="flex flex-col justify-center items-center bg-white md:w-60 w-[90%] h-60 gap-5 shadow-md lg:shadow-none lg:rounded-tl-2xl lg:rounded-bl-2xl rounded-2xl">
            <FaHotel size={50} className="text-gray-800" />
            <h2 className="text-[1.9rem] tracking-[.6rem] font-semibold">
              <Counter
                end={DetailsDataArr.partners}
                duration={counterDuration}
              />
            </h2>
            <p className="text-[1rem] tracking-[.3rem] font-semibold">
              Partners
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-center items-center bg-white md:w-60 w-[90%] h-60 gap-5 shadow-md lg:shadow-none rounded-2xl">
            <FaHotel size={50} className="text-gray-800" />
            <h2 className="text-[1.9rem] tracking-[.6rem] font-semibold">
              <Counter
                end={DetailsDataArr.listed_hotels}
                duration={counterDuration}
              />
            </h2>
            <p className="text-[1rem] tracking-[.3rem] font-semibold">
              Listed Hotels
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center items-center bg-white md:w-60 w-[90%] h-60 gap-5 shadow-md lg:shadow-none rounded-2xl">
            <FaHotel size={50} className="text-gray-800" />
            <h2 className="text-[1.9rem] tracking-[.6rem] font-semibold">
              <Counter
                end={DetailsDataArr.destinations}
                duration={counterDuration}
              />
            </h2>
            <p className="text-[1rem] tracking-[.3rem] font-semibold">
              Destinations
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col justify-center items-center bg-white md:w-60 w-[90%] h-60 gap-5 shadow-md lg:shadow-none lg:rounded-tr-2xl lg:rounded-br-2xl rounded-2xl">
            <FaHotel size={50} className="text-gray-800" />
            <h2 className="text-[1.9rem] tracking-[.6rem] font-semibold">
              <Counter
                end={DetailsDataArr.booking}
                duration={counterDuration}
              />
            </h2>
            <p className="text-[1rem] tracking-[.3rem] font-semibold">
              Booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoutingSection;
