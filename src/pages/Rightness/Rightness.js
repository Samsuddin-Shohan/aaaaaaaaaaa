import React from "react";
import iphone from "../../assets/iphone.png";
import greenIcon from "../../assets/GreenCheckIcon.svg";
import "./Rightness.css";
const Rightness = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="flex flex-col-reverse lg:grid lg:gap-4 lg:grid-cols-2 my-7 justify-items-end">
        <div className="start-youga">
          <h1 className="text-2xl lg:text-4xl font-bold ml-4 lg:ml-0">
            Start your yoga journey now!
          </h1>
          <img src={iphone} className="bg-img" alt="" />
        </div>
        <div className="mb-6 lg:right ml-2">
          <h1 className="text-2xl mb-6 lg:text-4xl font-bold lg:mb-10  lg:ml-4 lg:ml-0">
            Is Positive Yoga right for me?{" "}
          </h1>
          <div className="flex flex-start items-center py-1 ">
            <img src={greenIcon} alt="" className="greenImage mr-2  " />
            <h1 className="text-lg">
              Each program adapts to your age or fitness level
            </h1>
          </div>
          <div className="flex flex-start items-center py-1 ">
            <img src={greenIcon} alt="" className="greenImage mr-2  " />
            <h1 className="text-lg">
              Mindful way to exercise and get real results
            </h1>
          </div>
          <div className="flex flex-start items-center py-1 ">
            <img src={greenIcon} alt="" className="greenImage mr-2  " />
            <h1 className="text-lg">Effective and long term lasting results</h1>
          </div>
          <div className="flex flex-start items-center py-1 ">
            <img src={greenIcon} alt="" className="greenImage mr-2  " />
            <h1 className="text-lg">
              Suited activities that benefit both the mind and body
            </h1>
          </div>
          <div className="flex flex-start items-center py-1 ">
            <img src={greenIcon} alt="" className="greenImage mr-2  " />
            <h1 className="text-lg">
              Low-intensity but highly effective workouts
            </h1>
          </div>
          <div className="flex flex-start items-center py-1 ">
            <img src={greenIcon} alt="" className="greenImage mr-2  " />
            <h1 className="text-lg">
              Extra attention to muscle, joint and back health
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightness;
