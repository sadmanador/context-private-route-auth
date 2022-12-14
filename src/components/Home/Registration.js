import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Registration = () => {

    const { createUser, auth, googleSignIn } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(username, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserInfo(username)
                console.log('Registered user', user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const updateUserInfo = (username) => {
        updateProfile(auth.currentUser, {
            displayName: username
        })
            .then(() => {
                console.log('DisplayName updated')
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error=> console.error(error))
    }

    return (
        <div>
            <h2>Please fill up the registration form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder='Your username' name='username' required /><br />
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder='Your Email' name='email' required /><br />
                <label htmlFor="password">Password: </label>
                <input type="password" placeholder='Your password' name='password' required /><br />
                <button type='submit'>Register</button>
            </form>
            <Link to='/login'>Already have an account?</Link><br />
            <button onClick={handleGoogleSignIn}>Sign in with google</button>
        </div>
    );
};

export default Registration;