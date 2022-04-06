import React, { Children, useState } from "react";
import "./Plan.css";
import p1 from "../../../assets/ICONS whats in my program/1.svg";
import p2 from "../../../assets/ICONS whats in my program/2.svg";
import p3 from "../../../assets/ICONS whats in my program/3.svg";
import p4 from "../../../assets/ICONS whats in my program/4.svg";
import p5 from "../../../assets/ICONS whats in my program/5.svg";
import p6 from "../../../assets/ICONS whats in my program/6.svg";
import p7 from "../../../assets/ICONS whats in my program/7.svg";
import payment from "../../../assets/SafeCheckout.png";
import check from "../../../assets/CheckIcon.svg";
const Plan = ({ children }) => {
  const [borde1, setBorder1] = useState(1);
  const [border2, setBorder2] = useState(0);
  const [border3, setBorder3] = useState(0);

  return (
    <div className="mt-10 flex justify-center items-center">
      <div>
        <div>{children}</div>
        <div className="max-w-7xl flex justify-center items-center">
          <div className="plan-section grid gap-4 sm:grid-cols-1 lg:grid-cols-2 my-7">
            <div className="choose-plan">
              <h1 className="text-2xl ml-2 lg:text-4xl font-bold">
                Choose your plan and get
                <span className="text-amber-600"> 7 days free trial</span>
              </h1>
              <div className="grid gap-0 grid-rows-3 ">
                <div
                  className={`lg:mt-3 lg:p-3 mt-1 p-1 rounded-lg leading-loose  border-2 flex items-center justify-between`}
                  id={`card-${borde1}`}
                  onClick={() => {
                    setBorder1(1);
                    setBorder2(0);
                    setBorder3(0);
                  }}
                >
                  <div className="leading-7 lg:leading-10">
                    <h1 className="font-bold">
                      6 months plan{" "}
                      <span className="bg-amber-300 p-1 rounded-lg small-text">
                        Save 50%
                      </span>{" "}
                    </h1>
                    <p>
                      {" "}
                      <span className="text-3xl font-bold">$9.99 </span>
                      <span className="text-sm">/ month</span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold line-through">$119.94 </span>
                      <span className="mx-2 font-bold text-amber-400">
                        $59.97
                      </span>{" "}
                      billed every 6 months{" "}
                    </p>
                  </div>
                  {borde1 ? (
                    <img src={check} alt="" height="30px" width="30px" />
                  ) : (
                    <span
                      style={{
                        height: "30px",
                        width: "30px",
                        backgroundColor: "lightgray",
                        borderRadius: "50%",
                      }}
                    ></span>
                  )}
                </div>
                <div
                  className="mt-3 p-3 rounded-lg leading-loose   border-2 flex items-center justify-between"
                  id={`card-${border2}`}
                  onClick={() => {
                    setBorder1(0);
                    setBorder2(1);
                    setBorder3(0);
                  }}
                >
                  <div>
                    <h1 className="font-bold">3 month plan </h1>
                    <p>
                      {" "}
                      <span className="text-3xl font-bold">$14.99 </span>
                      <span className="text-sm">/ month</span>{" "}
                    </p>
                    <p>
                      {" "}
                      <span className="font-bold line-through">$59.97 </span>
                      <span className="mx-2 font-bold text-amber-400">
                        $44.97
                      </span>{" "}
                      billed every 3 months{" "}
                    </p>
                  </div>

                  {border2 ? (
                    <img src={check} alt="" height="30px" width="30px" />
                  ) : (
                    <span
                      style={{
                        height: "30px",
                        width: "30px",
                        backgroundColor: "lightgray",
                        borderRadius: "50%",
                      }}
                    ></span>
                  )}
                </div>
                <div
                  className="mt-3 p-3 rounded-lg leading-loose  border-2 flex items-center justify-between"
                  id={`card-${border3}`}
                  onClick={() => {
                    setBorder1(0);
                    setBorder2(0);
                    setBorder3(1);
                  }}
                >
                  <div>
                    <h1 className="font-bold">1 month plan </h1>
                    <p>
                      {" "}
                      <span className="text-3xl font-bold">$19.99 </span>
                      <span className="text-sm">/ month</span>{" "}
                    </p>
                    <p>Billed monthly</p>
                  </div>

                  {border3 ? (
                    <img src={check} alt="" height="30px" width="30px" />
                  ) : (
                    <span
                      style={{
                        height: "30px",
                        width: "30px",
                        backgroundColor: "lightgray",
                        borderRadius: "50%",
                      }}
                    ></span>
                  )}
                </div>
              </div>
              <button className="mt-4 w-full font-bold text-white bg-orange-400 py-4 rounded-lg text-xl">
                Get your plan
              </button>
              <p className="text-sm text-center mt-3 leading-5 text-black ">
                Your free trial will automatically become a paid subscription on
                the 8th day after you begin your trial. To cancel your
                subscription, please contact us at least 24 hours before the end
                of the trial period.
              </p>
              <p className="text-sm text-center mt-3 leading-5 text-black ">
                By choosing a payment method you agree to the{" "}
                <span className=" text-blue-500"> T&Cs </span>and
                <span className=" text-blue-500"> Privacy Policy</span>
              </p>
              <img className="mt-5 mx-auto" src={payment} alt="" />
            </div>
            <div className="program">
              <h1 className="font-bold text-3xl ml-6 lg:mb-14 mb-2">
                What's in my program?
              </h1>
              <div className="flex justify-start items-center space-y-4">
                <img
                  src={p1}
                  alt=""
                  className="mr-4"
                  height="70px"
                  width="50px"
                />
                <div>
                  <h1 className="font-bold text-lg">
                    A personalized yoga program
                  </h1>
                  <p className="text-base">
                    Completely safe and focused on your key goals
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center space-y-4">
                <img
                  src={p2}
                  alt=""
                  className="mr-4"
                  height="70px"
                  width="50px"
                />
                <div>
                  <h1 className="font-bold text-base">
                    Easy & Enjoyable yoga workouts for your level
                  </h1>
                  <p className="text-sm">
                    Program adjusts to your level and pace
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center space-y-4">
                <img
                  src={p3}
                  alt=""
                  className="mr-4"
                  height="70px"
                  width="50px"
                />
                <div>
                  <h1 className="font-bold text-base">
                    No special preparation needed
                  </h1>
                  <p className="text-sm">
                    Perfect for beginners!Requires no special preparation or
                    equipment.
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center space-y-4">
                <img
                  src={p4}
                  alt=""
                  className="mr-4"
                  height="70px"
                  width="50px"
                />
                <div>
                  <h1 className="font-bold text-base">
                    Daily Motivation and Acountability
                  </h1>
                  <p className="text-sm">
                    Track your progress, develop a healthy routine, reach goals
                    faster
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center space-y-4">
                <img
                  src={p5}
                  alt=""
                  className="mr-4"
                  height="70px"
                  width="50px"
                />
                <div>
                  <h1 className="font-bold text-base">
                    Browse from various yoga challanges.
                  </h1>
                  <p className="text-sm">
                    30 d morning yoga, mindful yoga, back flexibilty challange,
                    and more!
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center space-y-4">
                <img
                  src={p6}
                  alt=""
                  className="mr-4"
                  height="70px"
                  width="50px"
                />
                <div>
                  <h1 className="font-bold text-base">
                    Easy access on any device
                  </h1>
                  <p className="text-sm">
                    Do your yoga anywhere accross all types of devices
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center space-y-4">
                <img
                  src={p7}
                  alt=""
                  className="mr-4"
                  height="70px"
                  width="50px"
                />
                <div>
                  <h1 className="font-bold text-base">
                    A Complete guide to get started
                  </h1>
                  <p className="text-sm">
                    Best tips, guidelines, advice, and recommendations for
                    succesfull practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
