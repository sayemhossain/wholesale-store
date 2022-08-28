import React from "react";
import useProducts from "../../../hooks/useProducts";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
  const [products] = useProducts();

  return (
    <div className="md:px-10">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All Tool : {products.length}
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="px-5  pb-20 ">
        <div class="overflow-x-auto rounded-lg">
          <table class="table-compact table-zebra w-full">
            <thead>
              <tr className="bg-gray-200">
                <th>No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Available quantity</th>
                <th>Min order quantity</th>
                <th>Price</th>
                <th>Delete product</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <ManageProductsRow
                  key={product._id}
                  index={index}
                  product={product}
                ></ManageProductsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
