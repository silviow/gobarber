import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus { outline: 0; }

    html, body, #root { height: 100%; }

    body { -webkit-font-smoothing: antialiased; }

    body, input, button { font: 400 16px 'Raleway', sans-serif; }

    form {
        input {
            border: 0;
            width: 100%;
            height: 55px;
            color: #333;
            padding: 0 18px;
            border-radius: 10px;
            box-shadow: 0 0 100px rgba(0,0,0,0.05);
        }

        textarea {
            width: 100%;
            color: #333;
            padding: 18px;
            min-height: 140px;
            border-radius: 10px;
            border: 1px solid #ededed;
        }

        input::placeholder, textarea::placeholder { color: #bbb; }

        input:-webkit-autofill,
        textarea:-webkit-autofill { box-shadow: 0 0 0 30px white inset !important; }
    }

    button { cursor: pointer; }

    .btn {
        border: 0;
        color: #fff;
        width: 100%;
        height: 55px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 15px;
        text-align: center;
        border-radius: 10px;
        display: inline-block;
        text-decoration: none;
        transition: all ease-in-out 0.1s;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn:hover { transform: perspective(1px) scale(0.98); }

    .purple_gradient { background: linear-gradient(to right, #673ab7, #512da8); }

    .white_gradient { background: linear-gradient(135deg, #dfe9f3 0%, #fff 100%); }
`;
