import React from "react";

const Subscribe = () => {
  return (
    <div className="py-14 bg-neutral">
      <div className="md:px-28">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-50">
              Subscribe Our Newsletter
            </h3>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Email Address"
              class="input w-full max-w-xs rounded-none focus:outline-none"
            />
            <button className="py-3 px-7 bg-gray-700 text-white rounded-none normal-case">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
