import React from "react";

const Subscribe = () => {
  const handleSubcribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const subscribeData = {
      email,
    };
    fetch(`https://stark-shelf-45913.herokuapp.com/subcribe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subscribeData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("You are connected with us..!");
      });
    e.target.reset();
  };
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
            <form action="" onSubmit={handleSubcribe}>
              <input
                type="text"
                name="email"
                placeholder="Your Email Address"
                class="input w-full max-w-xs rounded-none focus:outline-none"
              />
              <button
                type="submit"
                className="py-3 px-7 bg-gray-700 text-white rounded-none normal-case"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
