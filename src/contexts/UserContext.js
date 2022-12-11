import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    //creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    //logging the user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signing with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //set userInfo into common state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        //unmount the user
        return () => {
            unsubscribe();
        }
    }, []);

    //sign-out
    const userLogOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const authInfo = { auth, user, createUser, signIn, googleSignIn, userLogOut, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;