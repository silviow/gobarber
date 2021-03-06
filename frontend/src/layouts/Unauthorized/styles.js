import styled from 'styled-components';
import { purpleGradient } from '~/styles/global';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, ${purpleGradient});

    .go_barber {
        font-size: 220px;
        font-weight: 900;
        user-select: none;
        line-height: 200px;
        position: absolute;
        text-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    }
`;

export const Content = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 315px;
    text-align: center;

    input + input {
        margin-top: 10px;
    }

    form {
        display: flex;
        margin-top: 30px;
        flex-direction: column;

        span {
            color: #fff;
            margin: 8px 0;
            font-weight: 500;
            text-align: left;
            align-self: flex-start;
        }
    }

    .unauthorized_btn {
        box-shadow: 0 0 130px rgba(0, 0, 0, 0.6);
    }
`;
