import React from 'react';
import Login from './Login';
import App from '../App';
import { useAppContext } from '../context/AppContextProvider';
import { Link, Navigate } from 'react-router-dom';

const AuthRoute = () => {
    const {user:{isLoggedIn}} = useAppContext()
    // If authenticated, render the specified element (e.g., the component for the route)
    // If not authenticated, redirect to the login page
    return isLoggedIn ? (
      <App>
        <Link to="/"/>
      </App>
    ) : <Login/>
};

export default AuthRoute;
