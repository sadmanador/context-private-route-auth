import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(username, email, password);
    }

    return (
        <div>
            <h2>Please fill up the registration form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder='Your username' name='username' required/><br />
                <label htmlFor="email">Email: </label>
                <input type="email" placeholder='Your Email' name='email' required/><br />
                <label htmlFor="password">Password: </label>
                <input type="password"  placeholder='Your password' name='password' required/><br />
                <button type='submit'>Register</button>
            </form>
            <Link to='/login'>Already have an account?</Link>
        </div>
    );
};

export default Registration;