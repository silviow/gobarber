import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '~/assets/logo.svg';

export default function Register() {
    return (
        <>
            <img src={logo} alt="GoBarber" />
            <form>
                <input placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button
                    type="submit"
                    className="btn unauthorized_btn purple_gradient white_text"
                >
                    Create an account
                </button>
                <Link to="/" className="link_btn white_text">
                    <FiArrowLeft size={18} />I already have an account
                </Link>
            </form>
        </>
    );
}
