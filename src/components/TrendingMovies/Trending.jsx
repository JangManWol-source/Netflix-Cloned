
import trendingData from "../Data/TrendingData";
import Slider from "react-slick";
import {motion} from 'framer-motion'
const TrendingMovies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };


  return (
    <div className="w-full flex flex-col justify-center ml-4 text-white">
    <div className="font-bold text-sm md:text-xl">Trending Movies</div>
      <div className="w-full h-auto">
        <Slider className="mt-5 ml-2 mr-10" {...settings}>
          {trendingData.map((each) => (
            <motion.div key={each.id} whileHover={{scale:1.2}} className="h-auto">
              <div><img className="w-auto h-14 md:w-64 md:h-auto m-1 " src={each.img} alt="" /></div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingMovies;
