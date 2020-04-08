import styled, { css } from 'styled-components';
import { purpleGradient } from '~/styles/global';

export const Container = styled.div`
    position: relative;
`;

export const Badge = styled.button`
    border: none;
    background: none;
    position: relative;

    ${(props) =>
        props.hasUnread &&
        css`
            &::after {
                top: 1px;
                right: 1px;
                width: 9px;
                height: 9px;
                content: '';
                position: absolute;
                background: #e74c3c;
                border-radius: 50%;
            }
        `}
`;

export const NotificationsList = styled.div`
    width: 258px;
    height: 258px;
    overflow-y: auto;
    padding: 17px 18px;
    position: absolute;
    border-radius: 10px;
    top: calc(100% + 40px);
    left: calc(50% - 129px);
    background: rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 130px rgba(0, 0, 0, 0.08);

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: linear-gradient(to top, ${purpleGradient});
        border-radius: 8px;
    }

    &::before {
        width: 0;
        height: 0;
        top: -8px;
        content: '';
        position: absolute;
        left: calc(50% - 8px);
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid rgba(0, 0, 0, 0.16);
    }
`;

export const Notification = styled.div`
    color: #fff;

    & + & {
        margin-top: 13px;
        padding-top: 10px;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
    }

    p {
        font-size: 15px;
    }

    div {
        display: flex;
        margin-top: 5px;
        align-items: center;
    }

    time {
        opacity: 0.6;
        font-size: 13.3px;
        font-family: 'Lato', sans-serif;
    }

    button {
        border: 0;
        display: flex;
        background: none;
        margin-left: 13px;
        font-size: 13.3px;
        align-items: center;

        svg {
            margin-right: 3px;
        }

        ${(props) =>
            props.unread &&
            css`
                &::after {
                    content: '';
                    width: 7px;
                    height: 7px;
                    margin-left: 13px;
                    border-radius: 50%;
                    background: #e74c3c;
                    display: inline-block;
                }
            `}
    }
`;
