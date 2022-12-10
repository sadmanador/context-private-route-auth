import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Header.css'

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <NavLink className={({isActive})=> isActive ? "activeLink" : undefined} to='/'>Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : undefined} to='/register'>Register</NavLink>
            <NavLink className={({isActive})=> isActive ? "activeLink" : undefined} to='/login'>Login</NavLink>
            {user?.displayName && <span>Welcome, {user.displayName}</span>}
        </div>
    );
};

export default Header;