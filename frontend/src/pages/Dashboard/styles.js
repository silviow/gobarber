import styled from 'styled-components';
import { purpleGradient } from '~/styles/global';

export const Container = styled.div`
    display: flex;
    max-width: 600px;
    margin: 80px auto;
    padding: 30px;
    flex-direction: column;

    header {
        display: flex;
        align-self: center;
        align-items: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #fff;
            margin: 0 15px 5px;
            font-size: 22px;
            font-family: 'Lato', sans-serif;
        }
    }

    ul {
        display: grid;
        grid-gap: 10px;
        margin-top: 25px;
        grid-template-columns: repeat(2, 1fr);
        -webkit-box-reflect: below 10px -webkit-gradient(linear, left top, left
                    bottom, from(transparent), color-stop(70%, transparent), to(rgba(250, 250, 250, 0.06)));
    }

    @media (max-width: 720px) {
        ul {
            grid-template-columns: 1fr;
        }
    }
`;

export const Time = styled.li`
    display: flex;
    list-style: none;
    padding: 20px 23px;
    border-radius: 10px;
    align-items: center;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    color: ${(props) => (props.available ? '#000' : '#fff')};
    background: ${(props) => {
        if (props.past) {
            return 'linear-gradient(-135deg, transparent 30%, rgba(0, 0, 0, 0.08))';
        }
        if (props.available) {
            return '#fff';
        }
        return `linear-gradient(-135deg, ${purpleGradient})`;
    }};
    box-shadow: ${(props) =>
        props.past || props.available
            ? 'none'
            : '1px 1px 130px rgba(0, 0, 0, 0.3)'};

    strong,
    span {
        display: flex;
        align-items: center;
        opacity: ${(props) => (props.past ? 0.6 : 1)};
        color: ${(props) => (props.available ? '#7159c1' : '')};

        svg {
            margin-top: 2px;
            margin-left: 5px;
        }
    }
`;
