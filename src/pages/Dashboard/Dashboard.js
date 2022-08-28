import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);

  return (
    <div className="bg-gray-50">
      <div class="drawer  drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <div className="flex items-center justify-end md:justify-center">
            <h2
              className="text-4xl text-center pt-10 pb-3 text-base-400"
              style={{ fontFamily: "Teko" }}
            >
              Your Dashboard
            </h2>
            <label
              for="dashboard-sidebar"
              class=" drawer-button pt-5 px-5 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>

          <ul class="menu p-4 bg-gray-100 overflow-y-auto w-48 md:w-72  shadow-2xl text-base-content">
            <li>
              <Link className="" to="/dashboard/myprofile">
                My Profile
              </Link>
            </li>
            <li>
              <Link className=" " to="/dashboard/myorders">
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard">Payment Status</Link>
            </li>
            <li>
              <Link className=" " to="/dashboard/addreview">
                Add A Review
              </Link>
            </li>
            <li>
              {admin && (
                <>
                  <Link className=" " to="/dashboard/managereviews">
                    Manage All Review
                  </Link>
                  <Link className=" " to="/dashboard/addproducts">
                    Add New Products
                  </Link>
                  <Link to="/dashboard/manageproducts">Manage Products</Link>
                  <Link to="/dashboard/manageallorder">Manage All orders</Link>
                  <Link to="/dashboard">Upload Blogs</Link>
                  <Link to="/dashboard">Manage Blogs</Link>
                  <Link to="/dashboard/alluser">All user & Make Admin</Link>
                  <Link to="/dashboard/alladmin">All admin</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
