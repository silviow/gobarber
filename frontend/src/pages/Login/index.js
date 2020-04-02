import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter your email'),
    password: Yup.string().required('Enter your password'),
});

export default function Login() {
    function handleSubmit(data) {}

    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
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
            </Form>
        </>
    );
}
