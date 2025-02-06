import one from "../../../assets/images/1.png";
import two from "../../../assets/images/2.png";
import three from "../../../assets/images/3.png";
import four from "../../../assets/images/4.png";
import five from "../../../assets/images/5.png";
import six from "../../../assets/images/6.png";
import seven from "../../../assets/images/7.png";
import eight from "../../../assets/images/8.png";
import nine from "../../../assets/images/9.png";

const imageCards = [
  {
    imageName: one,
    title: "Beautiful Sunset",
    description: "A breathtaking view of the sun setting over the mountains.",
  },
  {
    imageName: two,
    title: "City Lights",
    description: "The vibrant nightlife of a bustling cityscape.",
  },
  {
    imageName: three,
    title: "Serene Beach",
    description: "Relax and unwind with this peaceful ocean view.",
  },
  {
    imageName: four,
    title: "Majestic Forest",
    description: "A dense forest full of mystery and adventure.",
  },
  {
    imageName: five,
    title: "Snowy Peaks",
    description: "A stunning view of snow-covered mountains.",
  },
  {
    imageName: six,
    title: "Autumn Leaves",
    description: "A beautiful display of golden autumn foliage.",
  },
  {
    imageName: seven,
    title: "Desert Dunes",
    description: "Rolling sand dunes under a scorching sun.",
  },
  {
    imageName: eight,
    title: "Crystal Lake",
    description: "A pristine lake reflecting the clear blue sky.",
  },
  {
    imageName: nine,
    title: "Misty Waterfall",
    description: "A hidden waterfall surrounded by mist and greenery.",
  },
];

const FeatureImageSections = () => {
  return (
    <div className="overflow-x-auto w-full overflow-hidden lg:h-auto scrollbar-hide">
      <div className="flex flex-col md:flex-row gap-6 pr-4 md:pr-0">
        {imageCards.map((items, index) => {
          return (
            <div
              key={index}
              className="relative group md:min-w-[400px] lg:min-w-[560px] cursor-pointer overflow-hidden"
            >
              <img
                src={items.imageName}
                alt={items.title}
                className="w-[340px] h-[240px] md:w-[510px] md:h-[280px] lg:h-[400px] lg:w-[550px] rounded-lg object-cover object-top"
              />
              <div
                className="absolute rounded-lg translate-y-20 md:translate-y-28 text-white transition-transform duration-200 hover:opacity-90 md:opacity-90
                   group-hover:translate-y-6 top-0 bottom-0 -left-2 xl:w-full xl:h-[400px] 
                  bg-gradient-to-b from-transparent via-black/50 to-black"
              >
                <div className="flex flex-col mx-6 mt-32 gap-3 group-hover:mt-30 md:group-hover:mt-60 md:mt-52 lg:mt-60 md:w-[85%] md:gap-4 md:leading-relaxed">
                  <h1 className="text-base font-semibold md:text-2xl md:font-normal">
                    {items.title}
                  </h1>
                  <p className="text-xs font-light md:text-base leading-snug">
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureImageSections;
