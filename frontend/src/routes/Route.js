/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Authenticated from '~/layouts/Authenticated';
import Unauthorized from '~/layouts/Unauthorized';
import { store } from '~/store';

export default function RouteWrapper({
    component: Component,
    restricted,
    ...rest
}) {
    const { authenticated } = store.getState().auth;

    if (!authenticated && restricted) {
        return <Redirect to="/" />;
    }

    if (authenticated && !restricted) {
        return <Redirect to="/dashboard" />;
    }

    const Layout = authenticated ? Authenticated : Unauthorized;

    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    restricted: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    restricted: false,
};
