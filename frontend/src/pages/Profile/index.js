import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FiPower } from 'react-icons/fi';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <AvatarInput name="avatar_id" />
                <Input name="name" placeholder="Your name" />
                <Input name="email" type="email" placeholder="Your email" />
                <div className="password_related_inputs">
                    <Input
                        name="oldPassword"
                        type="password"
                        placeholder="Your current password"
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="Your new password"
                    />
                    <Input
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirm your password"
                    />
                </div>
                <button type="submit" className="btn purple_gradient">
                    Update my account data
                </button>
            </Form>
            <button type="button" className="link_btn white_text">
                <FiPower size={18} color="#fff" />
                Logout
            </button>
        </Container>
    );
}
