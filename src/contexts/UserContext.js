import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ })

    //creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logging the user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //set userInfo into common state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        //unmount the user
        return () => {
            unsubscribe();
        }
    },[]);

    //sign-out
    const userLogOut = () => {
        signOut(auth)
        .then(()=>{
            console.log('user log out')
        })
        .catch(error=> console.error(error))
    }

    const authInfo = { auth, user, createUser, signIn, userLogOut };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;