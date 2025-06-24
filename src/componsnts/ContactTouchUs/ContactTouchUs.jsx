import React from "react";
import ContactCard from "./ContactCard";

const staticContactData = [
  {
    title: "Head Office",
    address: "123 Main Street, New Delhi, India",
  },
  {
    title: "Branch Office",
    address: "456 Park Avenue, Mumbai, India",
  },
  {
    title: "Support",
    address: "support@example.com",
  },
  {
    title: "Sales",
    address: "+91 90000 00000",
  },
];

const colors = ["bg-orange-400", "bg-blue-400", "bg-green-400", "bg-rose-400"];

const ContactTouchUs = () => {
  // Alternate direction for each card
  const getDirection = (idx) => (idx % 2 === 0 ? "top-down" : "down-top");

  return (
    <div className="section w-full">
      <div className="container max-w-screen-xl mx-auto md:px-10 px-4 py-10 flex flex-col gap-10 ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-2 md:px-5">
          <h2 className="md:text-[2rem] text-[1.5rem] font-semibold text-gray-700">
            Stay in touch
          </h2>
          <a href="https://wa.me/+918347622244" className="block">
            <h2 className="text-[1.2rem] md:text-[1.5rem] font-semibold text-gray-700">
              +91 83476 22244
            </h2>
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 w-full">
          {staticContactData.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[48%] flex"
              style={{ minHeight: "180px" }}
            >
              <ContactCard
                title={item.title}
                address={item.address}
                direction={getDirection(idx)}
                bgColor={colors[idx % colors.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactTouchUs;
