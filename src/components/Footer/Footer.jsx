import React from "react";
import Profile from "../../Pofile/Profile";

const Footer = () => {
  return (
    <div className="w-full p-5 flex justify-center text-center text-gray-400">
      <div className="w-11/12">
        <Profile />
        <div className="m-2">
            This webapp is designed by Joe Cristian Jamis inspired by Netflix. This is for educational purposes only.
        </div>
      </div>
    </div>
  );
};

export default Footer;
