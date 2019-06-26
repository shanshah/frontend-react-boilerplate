import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div>Home</div>
    <Link to="/login">Go to Login page</Link>
  </div>
);

export default Home;