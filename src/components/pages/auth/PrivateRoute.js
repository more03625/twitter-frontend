import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getUserInfo } from '../../../helper/comman_helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = getUserInfo();

        // If Not logged in so redirect to login page with the return url
        if (!currentUser) {
            return <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        }

        
        // authorised so return component
        return <Component {...props} />
    }} />
)
export default PrivateRoute;