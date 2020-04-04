import produce from 'immer';

const INITIAL_STATE = {
    token: null,
    authenticated: false,
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@auth/LOGIN_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@auth/LOGIN_SUCCESS': {
                draft.token = action.payload.token;
                draft.authenticated = true;
                draft.loading = false;
                break;
            }
            case '@auth/AUTH_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
