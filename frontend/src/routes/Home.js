import { useState } from "react";
const Home = () => {
  const [formState, setformState] = useState("success");
  return (
    <div className="home-wrapper relative w-full min-h-full flex flex-col items-center justify-center bg-white lg:py-24">
      <div className="w-full min-h-[50vh] md:w-[50%] lg:w-[35%] md:bg-white md:shadow-lg rounded-md p-10 z-30">
        {/* Heading */}
        {formState !== "success" && (
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <button
                className={`h-8 text-xs  text-white ${
                  formState === "place-order"
                    ? "bg-orange-600 font-semibold"
                    : "bg-gray-200 text-gray-600 font-normal"
                } rounded-l-md px-2`}
                onClick={() => {
                  setformState("place-order");
                }}
              >
                Place order
              </button>
              <button
                className={`h-8 text-xs text-white  ${
                  formState === "check-order"
                    ? "bg-orange-600 font-semibold"
                    : "bg-gray-200 text-gray-600 font-normal"
                } rounded-r-md border-l-2 border-white px-2`}
                onClick={() => {
                  setformState("check-order");
                }}
              >
                Check order
              </button>
            </div>
            <div className="text-2xl font-bold">bhu-eats</div>
          </div>
        )}

        {/* Order Form */}
        {formState === "place-order" && (
          <div className="form-section flex flex-col">
            <form className="">
              {/* Restaurant */}
              <div className="font-semibold text-gray-6s00 pb-2 mb-5 border-b">
                Please, select preffered eatery
              </div>

              <div className="form-row mb-5">
                <label className="font-semibold text-gray-600">
                  Order from:
                </label>
                <select className="w-full border h-10 px-2 rounded-md text-gray-600 ">
                  <option value="davta">Davta</option>
                  <option value="ngk">NGK</option>
                  <option value="omega"></option>
                </select>
              </div>

              <div className="font-semibold text-gray-6s00 pb-2 mb-5 border-b">
                Please, select your order
              </div>

              {/* Order */}
              <div className="form-row mb-5">
                <label className="font-semibold text-gray-600">Main Dish</label>
                <select className="w-full border h-10 px-2 rounded-md text-gray-600 ">
                  <option value="rice">Rice</option>
                  <option value="yam">Yam</option>
                  <option value="spagetti">Spagetti</option>
                </select>
              </div>

              <div className="form-row mb-5">
                <label className="font-semibold text-gray-600">
                  Protiens Dish
                </label>
                <select className="w-full border h-10 px-2 rounded-md text-gray-600">
                  <option value="beef">Beef</option>
                  <option value="sausage">Sausage</option>
                  <option value="goat-meat">Goat Meat</option>
                  <option value="fish">Fish</option>
                </select>
              </div>

              <div className="form-row mb-5">
                <label className="font-semibold text-gray-600">Drinks</label>
                <select className="w-full border h-10 px-2 rounded-md text-gray-600">
                  <option value="rice">Water</option>
                  <option value="yam">Cway</option>
                  <option value="spagetti">Coke</option>
                  <option value="spagetti">Sprite</option>
                </select>
              </div>

              {/* Delivery */}
              <div className="font-semibold pb-2 mb-5 border-b">
                Please, select your address
              </div>

              <div className="form-row flex items-center justify-between mb-5">
                {/* Name */}
                <div className="form-row w-[48%]">
                  <label className="font-semibold text-gray-600">
                    Full Name
                  </label>
                  <input
                    className="text-gray-600 border h-10 px-2 rounded-md"
                    placeholder="Your Name"
                  />
                </div>

                {/* Phone */}
                <div className="form-row w-[48%]">
                  <label className="font-semibold text-gray-600">Phone</label>
                  <input
                    className="text-gray-600 border h-10 px-2 rounded-md"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Hostel */}
                <div className="form-row hidden w-[48%]">
                  <label className="font-semibold text-gray-600">Hostel</label>
                  <select className="w-full border h-10 px-2 rounded-md text-gray-600">
                    <option value="obh">Old Boys Hostel</option>
                    <option value="nbh">New Boys Hostel</option>
                    <option value="pfl">Portfolio</option>
                    <option value="ogh">Old Girls Hostel</option>
                    <option value="ngs">New Girls Hostel</option>
                    <option value="ngs">Newest Girls Hostel 1</option>
                    <option value="ngs">Newest Girls Hostel 2</option>
                  </select>
                </div>
              </div>

              <button className="w-full h-10 flex items-center justify-center bg-gray-200 rounded-md font-semibold">
                Place order
              </button>
            </form>
          </div>
        )}

        {/* Order ID login */}
        {formState === "check-order" && (
          <form>
            <input
              type="text"
              className="h-10 w-full px-3 border rounded-sm leading-none mb-5"
              placeholder="Enter your order ID"
            />
            <button className="font-semibold h-10 w-full bg-orange-600 rounded-md text-white shadow-sm">
              Check my order
            </button>
          </form>
        )}

        {formState === "success" && (
          <div className="h-full bg-red-100 flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 text-emerald-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>

            <div className="leading-none text-gray-600 text-center">
              Order Placed <br /> Succesfully
            </div>
          </div>
        )}
      </div>

      <div className="background-overlay absolute top-0 left-0 h-full w-full bg-black opacity-50 z-10 hidden md:block"></div>
    </div>
  );
};

export default Home;
