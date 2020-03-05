import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const DefaultLayout = React.lazy(() => import('../containers/DefaultLayout/DefaultLayout'));

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={
        props => (      localStorage.getItem('user')    ? <DefaultLayout  {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)