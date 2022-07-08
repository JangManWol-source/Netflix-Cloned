
import data from "../Data/TopMovieData";
import Slider from "react-slick";
import {motion} from 'framer-motion'
const TopMovies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };


  return (
    <div className="w-full flex flex-col justify-center m-4 text-white">
    <div className="font-bold text-sm md:text-xl">Today's Top Pick for you</div>
      <div className="w-full h-auto">
        <Slider className="mt-5 ml-2 mr-10" {...settings}>
          {data.map((each) => (
            <motion.div key={each.id} whileHover={{scale:1.2}} className="h-auto">
              <div><img className="w-64 h-auto m-1 " src={each.img} alt="" /></div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopMovies;
