import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { name, email, ...rest } = payload.data;

        const profile = {
            name,
            email,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, '/users', profile);

        toast.success('Profile successfully updated.', {
            className: 'notification',
        });

        yield put(updateProfileSuccess(response.data));
    } catch (error) {
        toast.error('Something went wrong.', {
            className: 'error notification',
        });

        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
