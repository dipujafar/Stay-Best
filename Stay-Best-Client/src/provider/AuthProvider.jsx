/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxiosSecure from "../hook/useAxiosSecure";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    

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

                   axiosSecure.post("/jwt", {email: currentUser?.email})
                    .then()
                }
                else{
                    setUser(null);
                    setLoading(false);

                    axiosSecure.post("/logOut",{})
                    .then()
                }
            })
            return () => {
                return unSubscribe();
            }
        },[axiosSecure])
    

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        logOut    
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;