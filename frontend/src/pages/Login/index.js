import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logo from '~/assets/logo.svg';

export default function Login() {
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button
                    type="submit"
                    className="btn unauthorized_btn purple_gradient white_text"
                >
                    Login
                </button>
                <Link to="/register" className="link_btn white_text">
                    <FiLogIn size={18} />
                    Register
                </Link>
            </form>
        </>
    );
}
