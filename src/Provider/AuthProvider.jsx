import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/Firebase_init';

export const AuthContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true)
    console.log(user,loading)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser= (updatedData)=>{
        return  updateProfile(auth.currentUser,updatedData)
    }
    const logInGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    
    
    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth ,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        updateUser,
        logInGoogle
    }
    
    return  <AuthContext value={authData}>
         {children}
     </AuthContext>;
};

export default AuthProvider;