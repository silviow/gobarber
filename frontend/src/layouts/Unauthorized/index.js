import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

export default function Unauthorized({ children }) {
    return <Wrapper>{children}</Wrapper>;
}

Unauthorized.propTypes = {
    children: PropTypes.element.isRequired,
};
