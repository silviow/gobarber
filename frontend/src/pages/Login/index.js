import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiLogIn } from 'react-icons/fi';
import * as Yup from 'yup';
import { loginRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter your email'),
    password: Yup.string().required('Enter your password'),
});

export default function Login() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(loginRequest(email, password));
    }

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
                    {loading ? 'Loading...' : 'Login'}
                </button>
                <Link to="/register" className="link_btn white_text">
                    <FiLogIn size={18} />
                    Register
                </Link>
            </Form>
        </>
    );
}
