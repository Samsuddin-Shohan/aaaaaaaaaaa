import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-2xl ml-3 lg:text-center font-bold lg:text-3xl mb-6">
        Frequently Asked Questions
      </h1>
      <div className="accordion w-9/12 mx-auto " id="accordionExample5">
        <div className="accordion-item bg-white border border-gray-200 rounded-lg">
          <h2 className="accordion-header mb-0" id="headingOne5">
            <button
              className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
             
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              font-bold
            "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne5"
              aria-expanded="true"
              aria-controls="collapseOne5"
            >
              What happens after I order?
            </button>
          </h2>
          <div
            id="collapseOne5"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne5"
          >
            <div className="accordion-body py-4 px-5 ">
              <p>
                After you place your order, we get to work! Based on the
                questions you answered in the quiz, we ll craft your personal
                plan to your level with recomendations on how to improve.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 rounded-lg">
          <h2 className="accordion-header mb-0" id="headingTwo5">
            <button
              className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              border-1
              text-base text-gray-800 text-left
              bg-white
              rounded-none
              transition
              focus:outline-none
              font-bold
            "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo5"
              aria-expanded="false"
              aria-controls="collapseTwo5"
            >
              Where I can access my plan?
            </button>
          </h2>
          <div
            id="collapseTwo5"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo5"
          >
            <div className="accordion-body py-4 px-5">
              <p>
                Your plan will be accessible in{" "}
                <span className="font-bold">Positive Yoga's</span> web app with
                a special link generated after your purchase{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 rounded-lg">
          <h2 className="accordion-header mb-0" id="headingFour5">
            <button
              className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              rounded-none
              transition
              focus:outline-none
              font-bold
            "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour5"
              aria-expanded="false"
              aria-controls="collapseFour5"
            >
              How can I cancel my subscription?
            </button>
          </h2>
          <div
            id="collapseFour5"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour5"
          >
            <div className="accordion-body py-4 px-5">
              <p>
                We are aiming to offer our clients the best experience, which
                comes with a lot of work. The entire yoga program is developed
                by our large team of experts that work long hours to prepare
                effective, trustworthy and enjoyable content and workouts that
                can help you to reach your goals. The program is also completely
                free of ads and is constantly being updated based on your
                feedback!{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200 rounded-lg">
          <h2 className="accordion-header mb-0" id="headingThree5">
            <button
              className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              rounded-none
              transition
              focus:outline-none
              font-bold
            "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree5"
              aria-expanded="false"
              aria-controls="collapseThree5"
            >
              Why this program is paid?
            </button>
          </h2>
          <div
            id="collapseThree5"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree5"
          >
            <div className="accordion-body py-4 px-5">
              <p>
                You can manage or cancel your subscription by writing our
                customer support hello@positiveyoga.app{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className=" w-4/5 mt-12 lg:w-2/6	font-bold text-white bg-orange-400 py-6 rounded-lg text-xl">
          Get my plan
        </button>
      </div>
    </div>
  );
};

export default FAQ;
