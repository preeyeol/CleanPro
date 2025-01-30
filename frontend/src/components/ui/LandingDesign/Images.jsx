import { useState, useEffect } from "react";
import Roof from "../../../assets/images/carsP.jpg"; 
import Road from "../../../assets/images/PPP.jpg";
import Way from "../../../assets/images/way.jpg";

const images = [
    { imageName: Roof,   },
    { imageName: Road, },
    { imageName: Way, }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return    (
      <div className="overflow-x-auto overflow-hidden ">
        <div className="flex gap-52"> {/* Removed gap to minimize spacing */}
          {images.map((items, index) => (
            <div key={index} className="relative group min-w-[20rem] max-w-[50rem] cursor-pointer">
              <img
                src={items.imageName}
                alt={`Slide ${index + 1}`}
                className="w-[30rem] h-[30rem] rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Carousel;
