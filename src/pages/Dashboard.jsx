import React from "react";
import img from "../img/images2.png";

const Dashbord = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-400">DASHBOARD</h1>
        </div>
        <div>
          <h1 className=" text-lg font-400 text-gray-400">Home / Dashboard </h1>
        </div>
      </div>
      <div>
        <img className="w-[100%] h-[70vh]" src={img} />
      </div>
    </div>
  );
};

export default Dashbord;
