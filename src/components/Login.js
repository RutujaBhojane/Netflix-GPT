import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg",
        }}
      >
        <form className="bg-black bg-opacity-75 p-12 rounded-lg shadow-lg w-96 z-10">
          <h1 className="text-white font-bold text-3xl text-center mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-6 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="w-full py-3 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-4 my-2 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
      {/* <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-2xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full"
        />
        <button className="p-4 my-4 bg-red-700 w-full">Sign In</button>
      </form> */}
    </div>
  );
};

export default Login;
