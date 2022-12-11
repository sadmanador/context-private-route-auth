import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Sadman' })

    //creating user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logging the user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = { auth, user, createUser, signIn, setUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;