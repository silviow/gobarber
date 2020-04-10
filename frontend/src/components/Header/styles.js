import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 30px;
    background: rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 130px rgba(0, 0, 0, 0.08);
`;

export const Content = styled.div`
    height: 80px;
    display: flex;
    margin: 0 auto;
    max-width: 1140px;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        align-items: center;

        img {
            height: 42px;
        }

        div {
            margin-left: 16px;
            padding-left: 20px;
            border-left: 1px solid #7159c1;
        }
    }

    aside {
        display: flex;
        align-items: center;
    }

    a {
        margin-top: 0;
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
    }
`;

export const Profile = styled.div`
    display: flex;
    margin-left: 20px;

    div {
        display: flex;
        text-align: right;
        margin-right: 15px;
        flex-direction: column;
        justify-content: center;

        a {
            opacity: 0.6;
            font-size: 14px;
            margin-top: 2px;
        }
    }

    a {
        display: flex;
        align-items: center;

        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
    }

    @media (max-width: 480px) {
        div {
            display: none;
        }
    }
`;
