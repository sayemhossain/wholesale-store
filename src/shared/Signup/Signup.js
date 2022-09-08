import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import useToken from "../../hooks/useToken";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const [token] = useToken(user || googleUser);

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name);

    await createUserWithEmailAndPassword(email, password);

    // for update name
    // await updateProfile({ displayName: name });
  };
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>
          <span className="text-black ml-1">{error?.message}</span>
        </p>
      </div>
    );
  }
  if (token) {
    navigate("/");
  }
  return (
    <div>
      <div className="normal-font">
        <form action="" onSubmit={handleSignup}>
          <div className="flex flex-col justify-center items-center h-full md:my-16  w-96 mx-auto shadow-2xl rounded-2xl pb-7 ">
            <h3 className="font-bold py-5 text-xl uppercase header-font">
              Sign up
            </h3>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="******"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <p>{errorElement}</p>
            <button
              type="submit"
              className="btn btn-accent btn-sm px-16 text-white mt-4 rounded-full hover:border-primary hover:rotate-3 hover:scale-90 duration-500"
            >
              Sign Up
            </button>
            <p className="mt-2 text-sm">
              Already a member?
              <Link className="text-red-800 ml-1" to="/signin">
                Sign in
              </Link>
            </p>
            <div className="pt-4 text-center text-xs">
              <button
                onClick={() => signInWithGoogle()}
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55"
              >
                <svg
                  class="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
