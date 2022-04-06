import React from "react";
import Header from "../../../shared/Header/Header";
import Rightness from "../../Rightness/Rightness";
import Clients from "../Clients/Clients";
import Discount from "../Discount/Discount";
import FAQ from "../FAQ/FAQ";
import MobileClient from "../MobileClient/MobileClient";
import Plan from "../Plan/Plan";

const Home = () => {
  return (
    <div>
      <Discount></Discount>
      <Header></Header>
      <Plan>
        <div>
          <p className="lg:text-center sm:text-left ml-4">
            Over <span className="font-bold">52 147</span> plans ordered
          </p>
          <h1 className="lg:text-center font-bold text-5xl mb-5 sm:text-left mx-4">
            Get access to your yoga program now!
          </h1>
        </div>
      </Plan>
      <Clients></Clients>
      <MobileClient></MobileClient>
      <Rightness></Rightness>
      <FAQ></FAQ>
      <Plan>
        <div>
          <h1 className="text-2xl text-center font-bold lg:text-4xl">
            Start your yoga program today!
          </h1>
        </div>
      </Plan>
    </div>
  );
};

export default Home;
