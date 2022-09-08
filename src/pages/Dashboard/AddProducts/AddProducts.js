import React from "react";
import { toast } from "react-toastify";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const main_price = e.target.main_price.value;
    const available_quantity = parseInt(e.target.available_quantity.value);
    const minimum_order_quantity = parseInt(
      e.target.minimum_order_quantity.value
    );
    const img = e.target.img.value;
    let description = e.target.description.value;

    const product = {
      name,
      img,
      description,
      minimum_order_quantity,
      available_quantity,
      price,
      main_price,
    };

    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => alert("Tool successfully added."));
    e.target.reset();
  };
  return (
    <div>
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          Add a new Product
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="flex justify-center my-10 px-5">
        <div className="card shadow-2xl bg-base-100 w-full max-w-sm">
          <div className="card-body">
            <form action="" onSubmit={handleAddProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    class="input input-bordered input-sm"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Selling Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    class="input input-bordered input-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Main Price</span>
                  </label>
                  <input
                    type="text"
                    name="main_price"
                    placeholder="Main Price"
                    class="input input-bordered input-sm"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Available Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="available_quantity"
                    placeholder="avaiable quantity"
                    class="input input-bordered input-sm"
                  />
                </div>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Minimum Order Quantity</span>
                </label>
                <input
                  type="text"
                  name="minimum_order_quantity"
                  placeholder="Minimum Order Quantity"
                  class="input input-bordered input-sm"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="img"
                  placeholder="image url"
                  class="input input-bordered input-sm"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <button type="submit" class="btn btn-primary">
                  Add New Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
