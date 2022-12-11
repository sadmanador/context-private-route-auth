import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2>This is home page</h2>
            {user?.displayName && <h3>Welcome... {user.displayName}</h3>}
        </div>
    );
};

export default Home;