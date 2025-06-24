import RoomCarousel from "./RoomCarousel";
import testimonial_image2 from "../../assets/Images/about_image_1.webp";
import testimonial_image from "../../assets/Images/about_image_2.webp";

const roomsData = [
  {
    id: 1,
    title: "Sparrow Room",
    description:
      "A comfortable room for a fulfilling stay with all modern amenities.",
    image: testimonial_image,
  },
  {
    id: 2,
    title: "Parrot Room",
    description: "Ideal for business and leisure, with 250 sq.ft. space.",
    image: testimonial_image2,
  },
  {
    id: 3,
    title: "Pelican Suite (Duplex)",
    description: "Lavish suite with double bed, bathroom, and twin toilets.",
    image: testimonial_image,
  },
  {
    id: 4,
    title: "Crane Cottage",
    description: "Three-room cottage ideal for families, with fireplace.",
    image: testimonial_image2,
  },
  {
    id: 5,
    title: "Hornbill Cottage",
    description:
      "Five-bedroom cottage, best accommodation with lounge & fireplace.",
    image: testimonial_image,
  },
  {
    id: 6,
    title: "Canary Room",
    description:
      "Superior 260 sq. ft room, accommodates 3 adults, mesmerizing views.",
    image: testimonial_image2,
  },
];

const Testimonial = () => {
  return (
    <div>
      <RoomCarousel data={roomsData} heading="Our Rooms Categories" />
    </div>
  );
};

export default Testimonial;
