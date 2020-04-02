import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function Authenticated({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

Authenticated.propTypes = {
    children: PropTypes.element.isRequired,
};
