import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
        return (
            <div>
                <h2>Please login below</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder='Your Email' name='email' required/><br />
                    <label htmlFor="password">Password: </label>
                    <input type="password" placeholder='Your password' name='password' required/><br />
                    <button type='submit'>Login</button>
                </form>
                <Link to='/'>Don't have an account yet?</Link>
            </div>
        );
    };

    export default Login;