import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    return () => unsubscribe(); //unsubscribe to onAuthStateChanged whenever Header component unmounts.
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={USER_ICON} alt="usericon" />
          <button onClick={handleSignOut} className="p-2 font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
