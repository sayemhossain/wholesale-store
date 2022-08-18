import { faAngleDown, faUser } from "@fortawesome/free-solid-svg-icons";
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
  // console.log(user);
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
            <img className="w-40" src={logo} alt="" />
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
        <div class="navbar-end">
          {user ? (
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="flex">
                <p className="w-6 h-6 bg-secondary text-black rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-gray-600"
                    icon={faUser}
                  ></FontAwesomeIcon>
                </p>
                <div className="flex items-center gap-2">
                  <p className="ml-2 font-semibold uppercase hover:cursor-pointer">
                    {user ? user.displayName : "Unknown user"}
                  </p>
                  <FontAwesomeIcon
                    className="text-sm text-secondary"
                    icon={faAngleDown}
                  ></FontAwesomeIcon>
                </div>
              </label>
              <ul
                tabindex="0"
                class="mr-[-4rem] mt-2 dropdown-content menu p-2 shadow bg-primary rounded-md w-52 text-gray-800 "
              >
                <li>
                  <Link to="/">Profile Settings</Link>
                </li>

                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <p onClick={logout}>Logout</p>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/signin"
                class="border-2 bg-secondary border-gray-300 text-gray-700 rounded-full py-1.5 px-7 hidden md:block mr-5 font-semibold hover:cursor-pointer"
              >
                Sign In
              </Link>{" "}
              <Link
                to="/signup"
                class="bg-primary border-2 border-gray-300 text-gray-700 font-semibold rounded-full py-1.5 px-7 hover:cursor-pointer"
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
