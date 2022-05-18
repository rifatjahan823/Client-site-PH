import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-4 container'>
            <h1>Welcome Our Todo Apps</h1>
            <img className='img-fluid' src="https://assets.materialup.com/uploads/1bd759d1-a616-45e8-8814-eb6742ebf8e3/preview.jpg" alt="" />
            <Link to='/todoapps'>Todo Apps</Link>
        </div>
    );
};

export default Home;