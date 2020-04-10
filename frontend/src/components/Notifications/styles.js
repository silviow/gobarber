import styled, { css } from 'styled-components';
import { purpleGradient } from '~/styles/global';

export const Container = styled.div`
    margin-top: 4px;
    position: relative;
`;

export const Badge = styled.button`
    border: none;
    background: none;
    position: relative;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: perspective(1px) scale(1.1);
    }

    ${(props) =>
        props.hasUnread &&
        css`
            &::after {
                top: 0;
                right: 0;
                width: 9px;
                height: 9px;
                content: '';
                position: absolute;
                background: #e74c3c;
                border-radius: 50%;
                border: 1.5px solid #512da8;
            }
        `}
`;

export const NotificationsList = styled.div`
    width: 275px;
    height: 252px;
    overflow-y: auto;
    padding: 16px 18px;
    position: absolute;
    border-radius: 10px;
    top: calc(100% + 36px);
    left: calc(50% - 137.5px);
    background: rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 130px rgba(0, 0, 0, 0.08);
    display: ${(props) => (props.visible ? 'block' : 'none')};
    /* background: linear-gradient(to right, ${purpleGradient});
    background-color: rgba(0, 0, 0, 0.13);
    background-blend-mode: overlay; */

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: linear-gradient(to top, ${purpleGradient});
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
        border-top: 1px solid rgba(0, 0, 0, 0.16);
    }

    p {
        font-size: 14.3px;
        line-height: 18px;
        font-family: 'Lato', sans-serif;
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
        margin-top: 0;
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
