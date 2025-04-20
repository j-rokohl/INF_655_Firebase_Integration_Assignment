import { auth } from "../../firebase";
import { createContext, useEffect, useContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({});

    const createUser = ( email, password ) => {
    return createUserWithEmailAndPassword( auth, email, password );
  };

  const updateUser = (name, email) => {
    return updateProfile(auth.currentUser, {
    displayName: name,
    email,
    photoURL: "../images/tiger1.png",
    }).then (() => {
        console.log(auth.currentUser.displayName, auth.currentUser.email);
        alert("Your profile is updated.");
        })
      };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword ( auth, email, password );
  };

  const logout = () => {
     return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
   }, []);

  return (
    <UserContext.Provider value={{ updateUser, createUser, user, logout, signIn }}>
         {children}
    </UserContext.Provider>
  );}; 

export const UserAuth = () => {
    return useContext(UserContext);
};