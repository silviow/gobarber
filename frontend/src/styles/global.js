import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const purpleGradient = '#673ab7, #512da8';

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

        input::placeholder, textarea::placeholder { color: #dedede; }

        input:-webkit-autofill,
        textarea:-webkit-autofill { box-shadow: 0 0 0 30px white inset !important; }
    }

    .btn {
        border: 0;
        color: #fff;
        width: 100%;
        height: 55px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        margin-top: 15px;
        text-align: center;
        border-radius: 10px;
        text-decoration: none;
        transition: all ease-in-out 0.1s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover { transform: perspective(1px) scale(0.98); }
    }

    .link_btn {
        display: flex;
        font-size: 18px;
        margin-top: 30px;
        font-weight: 500;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        transition: all ease-in-out 0.3s;

        &:hover { transform: translateX(5px); }

        svg { margin-right: 8px; }
    }

    .black_text { color: #000; }

    .white_text { color: #fff; }

    .purple_gradient { background: linear-gradient(to left, ${purpleGradient}); }

    .purple_gradient_text {
        background: linear-gradient(to left, ${purpleGradient});
        background-clip: none;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .notification {
        padding: 5px 10px;
        border-radius: 10px;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

        .Toastify__toast-body {
            padding: 0 5px;
        }
    }

    .info {
        background: linear-gradient(-135deg, ${purpleGradient});
    }

    .error {
        background: linear-gradient(135deg, #e74c3c, #bf2f22)
    }
`;
