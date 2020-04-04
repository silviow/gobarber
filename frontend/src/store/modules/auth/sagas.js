import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { loginSuccess, authFailure } from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* Login({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, '/sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.info('You must use the mobile app :)', {
                className: 'info notification',
            });

            yield put(authFailure());

            return;
        }

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(loginSuccess(token, user));

        history.push('/dashboard');
    } catch (error) {
        toast.error('Authentication failed. Check your access data.', {
            className: 'error notification',
        });

        yield put(authFailure());
    }
}

export function* Register({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, '/users', {
            name,
            email,
            password,
            provider: true,
        });

        history.push('/');
    } catch (error) {
        toast.error('Registration failed.', {
            className: 'error notification',
        });

        yield put(authFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/LOGIN_REQUEST', Login),
    takeLatest('@auth/REGISTER_REQUEST', Register),
]);
