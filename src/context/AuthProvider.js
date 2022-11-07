import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    //google log in
    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // sign in with email and password
    const signIn = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    // sign up with email and password
    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const profileUpdate =(profile) =>{
        return updateProfile(auth.currentUser, profile)
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = {providerLogin, user, logOut, signUp, setUser, signIn, loading, profileUpdate}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;