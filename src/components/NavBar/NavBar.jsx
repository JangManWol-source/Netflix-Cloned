import React from "react";
import logo from "../../assets/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from "../../assets/profile.png";
const NavBar = () => {
  const navMenu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "TVShows",
    },
    {
      id: 3,
      name: "Movies",
    },
    {
      id: 4,
      name: "New&Popular",
    },
    {
      id: 5,
      name: "MyList",
    },
  ];
  return (
  <React.Fragment>
   <div className="absolute w-full z-10">
   <div className="p-2 w-full bg-url sticky top-0">
      <div className="w-full flex">
        <div className="flex-1 flex flex-row items-center">
          <img className="w-20 h-auto" src={logo} alt="" />
          {navMenu.map((each) => (
            <button href="#" className="m-2 hover:text-gray-300 hidden md:flex text-white" key={each.id}>
                {each.name}
            </button>
          ))}
        </div>
        <div className="text-white flex-1 flex-row flex justify-end items-center">
            <SearchIcon/>
            <NotificationsIcon />
            <img className="m-1" src={profile} alt="" />
        </div>
      </div>
    </div>
   </div>
  </React.Fragment>
  );
};

export default NavBar;
