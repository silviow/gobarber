import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '~/components/Header';

export default function Authenticated({ children }) {
    return (
        <Wrapper>
            <Header />
            {children}
        </Wrapper>
    );
}

Authenticated.propTypes = {
    children: PropTypes.element.isRequired,
};
