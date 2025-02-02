// import { useRef, useEffect } from "react";

import one from "../../../assets/images/1.png";
import two from "../../../assets/images/2.png";
import three from "../../../assets/images/3.png";
import four from "../../../assets/images/4.png";
import five from "../../../assets/images/5.png";
import six from "../../../assets/images/6.png";
import seven from "../../../assets/images/7.png";
import eight from "../../../assets/images/8.png";
import nine from "../../../assets/images/9.png";

// const slides = [one, two, three, four, five, six, seven, eight, nine];

// const Carousel = () => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const scrollInterval = setInterval(() => {
//       if (carouselRef.current) {
//         const scrollWidth = carouselRef.current.scrollWidth;
//         const clientWidth = carouselRef.current.clientWidth;
//         const scrollLeft = carouselRef.current.scrollLeft;

//         // If at the end, scroll back to the start
//         if (scrollLeft + clientWidth >= scrollWidth - 1) {
//           carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           carouselRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
//         }
//       }
//     }, 3000); // Auto-scroll every 3 seconds

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen flex items-center justify-center">
//       {/* Scrollable container */}
//       <div
//         ref={carouselRef}
//         className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 p-4"
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {slides.map((image, index) => (
//           <div key={index} className="flex-shrink-0 w-[40vw] snap-center">
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[60vh] object-cover rounded-xl shadow-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

const images = [
  {
    image: one,
   
  },
  {
    image: two,

  },
  {
    image: three,

  },
  {
    image: four,

  },
  {
    image: five,
   
  },
  {
    image: six,

  },
  {
    image: seven,

  }, {
    image: eight,

  }, {
    image: nine,

  },
];

const ImageCard = ({ item }) => {
  return (
    <div className="relative group cursor-pointer">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 rounded-lg flex items-end">
        <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal p-2 sm:p-3 md:p-4">
          {item.title}
        </h3>
      </div>
    </div>
  );
};


const Image = () => {
  return (
    <div className="overflow-hidden h-auto">
      <div className="grid grid-cols-3 gap-4  p-[1rem]   ">
        {images.map((item) => (
          <ImageCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Image;

