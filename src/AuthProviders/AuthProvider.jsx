import React, { createContext } from 'react'
import { app } from '../Firebase/firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

export default function AuthProvider( { children } ) {

  /// signUp with google functionality starting ------------------------------

   const signUpWithGoogle = () => {
    return signInWithPopup(auth, provider)
   }

   const name = "Mostafiz"

   const authInfo= {
    signUpWithGoogle,
   }

  return (
    <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </>
  )
}
