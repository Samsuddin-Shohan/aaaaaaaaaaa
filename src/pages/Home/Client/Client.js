import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Client.css";

const Client = ({ user }) => {
  const { name, img, description, place } = user;
  const element = <FontAwesomeIcon icon={faStar} />;

  return (
    <div className="flex flex-col client bg-white shadow-lg rounded-xl p-6 ">
      <h1 className="font-bold ">{name}</h1>
      <p className="mb-4 text-gray-500">{place}</p>

      <p className="text-amber-400 mb-3">
        {element} {element} {element} {element} {element}
      </p>
      <img src={img} alt="" className="w-36 h-36 mb-3" />
      <p className="font-semibold text-gray-600 pr-3 text-lg	">{description}</p>
    </div>
  );
};

export default Client;
