import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 300px;
    margin: 80px auto;
    flex-direction: column;

    form {
        display: flex;
        margin-top: 30px;
        flex-direction: column;

        input {
            color: #fff;
            background: rgba(0, 0, 0, 0.16);
        }

        input + input {
            margin-top: 10px;
        }

        .password_related_inputs {
            margin-top: 20px;
            padding-top: 20px;
            margin-bottom: 6px;
            border-top: 1px solid #7159c1;
        }

        span {
            color: #fff;
            margin: 8px 0;
            font-weight: 500;
            text-align: left;
            align-self: flex-start;
        }

        button {
            box-shadow: 0 0 130px rgba(0, 0, 0, 0.1);
        }
    }

    button {
        margin-top: 20px;
    }
`;
