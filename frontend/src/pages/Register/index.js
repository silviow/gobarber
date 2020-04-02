import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string().required('Enter your name'),
    email: Yup.string().email('Invalid email').required('Enter your email'),
    password: Yup.string()
        .min(8, 'Your password must be at least 8 characters long')
        .required('Enter your password'),
});

export default function Register() {
    function handleSubmit(data) {}

    return (
        <>
            <img src={logo} alt="GoBarber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Name" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <button
                    type="submit"
                    className="btn unauthorized_btn purple_gradient white_text"
                >
                    Create an account
                </button>
                <Link to="/" className="link_btn white_text">
                    <FiArrowLeft size={18} />I already have an account
                </Link>
            </Form>
        </>
    );
}
