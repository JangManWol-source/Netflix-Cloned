import React from "react";
import banner_t from "../../assets/mh_text.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="h-auto md:h-screen text-xs md:text-lg w-full flex items-start flex-col justify-center p-4 text-white">
        <div className="w-full md:mt-0 mt-8">
          <img className="w-1/3 md:flex " src={banner_t} alt="" />
          <div className="md:w-1/3 w-9/12 md:leading-5 leading-2 md:mt-5">
            <span className="tracking-wide">
              Eight thieves take hostages and lock themselves in the Royal Mint
              of Spain as a criminal mastermind manipulates the police to carry
              out his plan.
            </span>
          </div>
          <div className="flex">
            <div className="bg-white flex items-center justify-center hover:bg-gray-400 p-1 mr-3  mt-3 text-gray-900 rounded-sm">
              <span>
                <PlayArrowIcon />
              </span>{" "}
              Play
            </div>
            <div className="bg-gray-600 hover:bg-gray-800 p-1 mr-3 flex items-center justify-center mt-3 text-white rounded-sm">
              <span>
                <InfoIcon />
              </span>
              More Info
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
