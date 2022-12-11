import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const {signIn, setUser} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result=> {
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
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