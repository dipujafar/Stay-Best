/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const signUp = (email, password)=>{
        setLoading(true);
         return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    } 

        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                if(currentUser){
                    setUser(currentUser);
                    setLoading(false);
                    console.log(currentUser);
                }
                else{
                    setLoading(false)
                }
            })
            return () => {
                return unSubscribe();
            }
        },[])
    

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        logOut    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;