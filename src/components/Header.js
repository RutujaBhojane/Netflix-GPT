import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user); //reading user from appStore
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //As soon as Header loads onAuthStateChanged listener will be there and it will check for auth everytime.
      // Whenever useEffect will be called / onAuthStateChanged will be called it will navigate to particular route.
      if (user) {
        const { uid, email, displayName } = user; //when we sign in or sign up we get a user object
        dispatch(addUser({ uid: uid, email: email, displayName: displayName })); //dispatching action addUser to add User to the store
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVC11njRAccYpkkyuBsUHtOOKYFGkwSR5W17rS9AcsA928D5_xgxoWHbUZESUThei8tFV3So6eTfjsvn0RRqN3kuxbq7KCI.png?r=59d"
            alt="usericon"
          />
          <button onClick={handleSignOut} className="p-2 font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
