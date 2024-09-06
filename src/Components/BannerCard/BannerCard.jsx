import React from "react";
import "../../index.css"; // Import the CSS for styling
import Uddeshya from "../../assets/UddeshyaPatel.png";
import BannerImage from "../../assets/BannerImage.jpeg";

const BannerCard = () => {
  return (
    <div className="banner-card bg-[url('https://img.freepik.com/free-psd/tropical-foliage-background_53876-91352.jpg?w=740&t=st=1725633519~exp=1725634119~hmac=c908c48bc75bb590a1747036d69824a46b9e886a43cf4ca12a3ffc8bb9ccddf5')] bg-cover bg-center">
      <div id="row-1" className="grid md:grid-flow-col gap-10 items-center ">
        <div
          id="card-1"
          className="bg-white rounded-lg p-5 items-center flex justify-center"
        >
          {" "}
          <img src={Uddeshya} alt="Banner" className="banner-image" />
        </div>
        <div id="card-3" className="bg-white rounded-lg  p-16">
          <div className="banner-content">
            <h2 className="banner-title text-white text-2xl">
              I'm Full Stack Developer
            </h2>
            <p className="banner-description text-gray-300 text-xl">
              In the world of code, a full stack developer is both architect and
              artisan. They build bridges between front-end dreams and back-end
              reality, Crafting seamless experiences with every line they write!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
