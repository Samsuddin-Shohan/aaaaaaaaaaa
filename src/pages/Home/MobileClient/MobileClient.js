import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emily from "../../../assets/testimonials/Emily.png";
import kylie from "../../../assets/testimonials/Kylie.png";
import jesica from "../../../assets/testimonials/Jesica.png";
import "./MobileClient.css";
const element = <FontAwesomeIcon icon={faStar} />;

const users = [
  {
    name: "Emiley, 28",
    place: "Delaware, NJ",
    star: 5,
    img: emily,
    description:
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
  },
  {
    name: "Kylie, 40",
    place: "Los Angeles",
    star: 5,
    img: kylie,
    description:
      "I will be very straightforward I hatesports and working out. Positive Yoga put my physical activity to the  next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
  },
  {
    name: "Jesica, 51",
    place: "San Francisco, CA",
    star: 5,
    img: jesica,
    description: `I have many friends who practiceyoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga
      )} program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation..`,
  },
];
const MobileClient = () => {
  return (
    <div id="carouselExampleIndicators">
      <h1 className=" sm:text-left ml-3 lg:text-center lg:ml-0 font-bold text-3xl mb-5">
        Here success stories from out clients
      </h1>
      <div class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <div className="flex flex-col client bg-white shadow-lg rounded-xl p-6 w-4/5 mx-auto my-12 ">
              <h1 className="font-bold ">{users[0].name}</h1>
              <p className="mb-4 text-gray-500">{users[0].place}</p>

              <p className="text-amber-400 mb-3">
                {element} {element} {element} {element} {element}
              </p>
              <img src={emily} alt="" className="w-36 h-36 mb-3" />
              <p className="font-semibold text-gray-600 pr-3 text-lg	">
                {users[0].description}
              </p>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <div className="flex flex-col client bg-white shadow-lg rounded-xl p-6  w-4/5 mx-auto my-12">
              <h1 className="font-bold ">{users[1].name}</h1>
              <p className="mb-4 text-gray-500">{users[1].place}</p>

              <p className="text-amber-400 mb-3">
                {element} {element} {element} {element} {element}
              </p>
              <img src={kylie} alt="" className="w-36 h-36 mb-3" />
              <p className="font-semibold text-gray-600 pr-3 text-lg	">
                {users[1].description}
              </p>
            </div>
          </div>
          <div class="carousel-item float-left w-full">
            <div className="flex flex-col client bg-white shadow-lg rounded-xl p-6 w-4/5 mx-auto my-12 ">
              <h1 className="font-bold ">{users[2].name}</h1>
              <p className="mb-4 text-gray-500">{users[2].place}</p>

              <p className="text-amber-400 mb-3">
                {element} {element} {element} {element} {element}
              </p>
              <img src={jesica} alt="" className="w-36 h-36 mb-3" />
              <p className="font-semibold text-gray-600 pr-3 text-lg	">
                {users[2].description}
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button className="w-4/5  mt-12 lg:w-2/6 font-bold text-white bg-orange-400 lg:py-6 py-3 rounded-lg text-xl">
          Get My plan
        </button>
      </div>
    </div>
  );
};

export default MobileClient;
