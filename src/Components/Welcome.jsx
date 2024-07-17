import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://videos.pexels.com/video-files/12722063/12722063-uhd_2560_1440_24fps.mp4"
        ></video>
        <div className="absolute top-0 left-0  flex justify-end w-full h-full bg-black opacity-60">
          <div className="w-96 h-72 mt-96 mr-64 bg-tranasparent border-r-2 border-b-8  border-red-500"></div>
        </div>
        <div className="absolute top-0 left-0 flex justify-end w-full h-full ">
          <div className="w-96 h-1/2 m-10 bg-black opacity-80 ">
            <div className="w-full border-2 border-black h-full bg-white">
              <h1 className="text-2xl font-mono font-bold text-center p-5">
                The Solar Energy Potential Map
              </h1>
              <p className="text-justify p-5">
                The Solar Energy Potential Map is a web-based tool that provides
                information on the solar energy potential of a location. The map
                uses data from the National Renewable Energy Laboratory (NREL)
                to estimate the solar energy potential of a location based on
                its latitude, longitude, and other factors. The map can be used
                by homeowners, businesses, and policymakers to determine the
                feasibility of installing solar panels at a specific location.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-start items-center">
          <h1 className="text-white text-5xl font-mono font-bold welcometxt fixed bottom-9 left-5">
            Welcome to The Solar Energy Potential Map
            <br />
            The Future Power Predictor{" "}
            <Link
              to="/map"
              className="w-10  text-2xl p-3 rounded-lg h-3 bg-red-400 hover:bg-red-600"
            >
              Let's Dive Into The Map
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Welcome;
