import intializeFirebase from "./firebaseinit"
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from "firebase/auth";
import { useState,useEffect } from "react";

intializeFirebase()
const useFirebase=()=>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState({})
    const [error,setError]=useState("")
    const createAcount=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            setError("Successfully done Registaratin");
        }).catch=(err)=>{
            setError(err.message)
        }
    }
    const SignInEmailPassword=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            setUser(res.user)
        }).catch=(err)=>{
            setError(err.message)
        }
    }
    const signInUsingGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);
    return {user,error,createAcount,SignInEmailPassword,signInUsingGoogle,logout}

}

export default useFirebase;