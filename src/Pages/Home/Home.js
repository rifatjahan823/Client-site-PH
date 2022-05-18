import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome Our Todo Apps</h1>
            <Link to='/todoapps'>Todo Apps</Link>
        </div>
    );
};

export default Home;