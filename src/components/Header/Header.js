import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css'

const Header = () => {
    const {user,userLogOut} = useContext(AuthContext);
    return (
        <div>
            <NavLink className={({isActive})=> isActive ? "activeLink" : undefined} to='/'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : undefined} to='/orders'>Orders</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : undefined} to='/register'>Register</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : undefined} to='/login'>Login</NavLink>
            {user?.displayName && <span>Welcome, {user.displayName}</span>}
            {user?.displayName ? <button onClick={userLogOut}>Sign out</button> : <Link to='/login'><button>Sign in</button></Link>}
        </div>
    );
};

export default Header;