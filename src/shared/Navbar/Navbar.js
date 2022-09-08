import {
  faAngleDown,
  faCartPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../img/logo2.webp";
const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  console.log(user);
  return (
    <div>
      <div class="navbar md:px-28 bg-base-100 shadow-lg md:py-7">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            {/* <img className="w-40 hidden md:block" src={logo} alt="" /> */}
            <p className="uppercase">
              Wholesale <span className="text-neutral">Store</span>
            </p>
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            )}

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          {user ? (
            <p
              onClick={logout}
              class="border-2 bg-white border-gray-300 text-gray-700 rounded-full py-1.5 px-7 hidden md:block mr-5 font-semibold hover:cursor-pointer"
            >
              Sign Out
            </p>
          ) : (
            ""
          )}
          {user ? (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              <p className="font-semibold uppercase hover:cursor-pointer">
                {user ? user.displayName : "Unknown user"}
              </p>
              <FontAwesomeIcon
                className=" text-red-500 ring-2 ring-gray-400 rounded-full p-1"
                icon={faCartPlus}
              ></FontAwesomeIcon>
            </div>
          ) : (
            <>
              <Link
                to="/signin"
                class="border-2 bg-secondary border-gray-300 text-gray-700 rounded-none py-1.5 px-7 hidden md:block mr-5 font-semibold hover:cursor-pointer"
              >
                Sign In
              </Link>{" "}
              <Link
                to="/signup"
                class="bg-primary border-2 border-gray-300 text-gray-700 font-semibold rounded-none py-1.5 px-7 hover:cursor-pointer"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
