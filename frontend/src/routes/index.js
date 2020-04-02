import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/dashboard" restricted component={Dashboard} />
            <Route exact path="/profile" restricted component={Profile} />
        </Switch>
    );
}
