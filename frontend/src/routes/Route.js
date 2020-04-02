/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Authenticated from '~/layouts/Authenticated';
import Unauthorized from '~/layouts/Unauthorized';

export default function RouteWrapper({
    component: Component,
    restricted,
    ...rest
}) {
    const signed = false;

    if (!signed && restricted) {
        return <Redirect to="/" />;
    }

    if (signed && !restricted) {
        return <Redirect to="/dashboard" />;
    }

    const Layout = signed ? Authenticated : Unauthorized;

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
