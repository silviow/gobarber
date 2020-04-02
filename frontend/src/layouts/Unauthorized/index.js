import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';

export default function Unauthorized({ children }) {
    return (
        <Wrapper>
            <span className="go_barber purple_gradient_text">
                Go
                <br />
                Barber
            </span>
            <Content>{children}</Content>
        </Wrapper>
    );
}

Unauthorized.propTypes = {
    children: PropTypes.element.isRequired,
};
