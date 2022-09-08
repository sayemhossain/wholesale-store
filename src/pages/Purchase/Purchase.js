import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import useProductDetails from "../../hooks/useProductDetails";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const productId = useParams();
  const [product] = useProductDetails(productId);
  const {
    _id,
    name,
    img,
    main_price,
    price,
    description,
    minimum_order_quantity,
    available_quantity,
    rating,
  } = product;

  const handleOrder = (event) => {
    event.preventDefault();
    const orderQuantity = event.target.order.value;

    const address = event.target.address.value;
    const phone = event.target.phone.value;

    if (orderQuantity > available_quantity) {
      return alert("Sorry we don't have enough products !");
    }
    if (orderQuantity < minimum_order_quantity) {
      return alert("You have to fulfil our minimum orders requirment !");
    }

    const totalCost = orderQuantity * price;
    const profit = totalCost - main_price * orderQuantity;
    const order = {
      orderId: _id,
      productName: name,
      customerNamer: user?.displayName,
      user: user.email,
      img,
      main_price,
      price,
      profit,
      available_quantity,
      orderQuantity,
      totalCost,
      address,
      phone,
    };
    const newQuantity = available_quantity - orderQuantity;
    fetch(`https://stark-shelf-45913.herokuapp.com/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        const url = `https://stark-shelf-45913.herokuapp.com/products/${_id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ newQuantity }),
        })
          .then((res) => res.json())
          .then((data) => alert("Your order is successfull!"));
      });
    event.target.reset();
  };
  return (
    <div>
      <section>
        <div className="py-10 md:py-20 md:pl-5 md:pr-20 min-h-screen max-w-[1340px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:pl-20 gap-10">
            <div className="">
              <div
                className="md:pl-7  md:ml-5 shadow-lg rounded-xl py-3"
                style={{ fontFamily: "Macondo" }}
              >
                <img
                  className="rounded-2xl mx-auto w-96 h-96"
                  src={img}
                  alt=""
                />
                <div className="flex items-center my-4 gap-5">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p>
                    <FontAwesomeIcon
                      className="text-yellow-500"
                      icon={faStar}
                    ></FontAwesomeIcon>{" "}
                    {rating}
                  </p>
                </div>
                <p class="pb-3">{description}</p>
                <p>
                  Per piece price:{" "}
                  <span className="text-gray-600 font-bold border-4 border-gray-50 rounded-2xl">
                    ${price}
                  </span>
                </p>
                <div className="mb-5">
                  <p>
                    Available Quantity :{" "}
                    <span className="text-red-500 font-bold">
                      {available_quantity}
                    </span>
                  </p>
                  <p>
                    Minimum Order Quantity :{" "}
                    <span className="text-red-500 font-bold">
                      {minimum_order_quantity}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div class="card bg-base-100 shadow-lg">
                  <div class="card-body">
                    <div>
                      <h2
                        class="text-center text-xl"
                        style={{ fontFamily: "Koulen" }}
                      >
                        Order <span className="text-neutral"> {name}</span>
                      </h2>
                      <form action="" onSubmit={handleOrder}>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Name</span>
                          </label>
                          <input
                            type="text"
                            value={user.displayName}
                            disabled
                            class="input input-bordered input-sm w-full"
                          />
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Email</span>
                          </label>
                          <input
                            type="text"
                            value={user.email}
                            disabled
                            class="input input-bordered input-sm w-full"
                          />
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Phone</span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            class="input input-bordered input-sm w-full"
                            required
                          />
                        </div>
                        <div class="form-control">
                          <label class="label">
                            <span class="label-text">Address</span>
                          </label>
                          <textarea
                            name="address"
                            class="textarea textarea-bordered"
                            placeholder="Your address"
                            required
                          ></textarea>
                        </div>

                        <div className="text-center mt-3">
                          <h3
                            className="font-bold my-1"
                            style={{ fontFamily: "Macondo" }}
                          >
                            Amount you need
                          </h3>
                          <input
                            type="text"
                            name="order"
                            placeholder={minimum_order_quantity}
                            class="input input-bordered input-sm w-full max-w-xs"
                          />
                        </div>
                        <div class="card-actions justify-center mt-3">
                          <button class="btn btn-primary btn-sm">
                            place the order
                          </button>
                        </div>
                      </form>
                      <p
                        className="text-center mt-2"
                        style={{ fontFamily: "Macondo" }}
                      >
                        If you want to see your orders then click here <br></br>
                        <Link
                          to="/dashboard/myorders"
                          className="text-blue-500 underline"
                        >
                          My orders
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </section>
    </div>
  );
};

export default Purchase;
