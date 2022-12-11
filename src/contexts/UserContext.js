import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const { user, setUser } = useState({ displayName: 'Sadman' })

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = { auth, user, createUser, signIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;