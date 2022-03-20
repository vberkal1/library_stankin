import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

type PrivateRouteProps = RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component, ...rest }) => (
    <>
        <Route {...rest}>
            {/* {authStore.isAuth } */}
            {true ? component : <Redirect to={{ pathname: '/login' }} />}
        </Route>
    </>
);

export default PrivateRoute;
