import { Types } from "../types";

export const login = payload => ({
    type: Types.Auth.LOGIN,
    payload
});

export const loginSuccess = payload => ({
    type: Types.Auth.LOGIN_SUCCESS,
    payload
});

export const loginFail = payload => ({
    type: Types.Auth.LOGIN_FAIL,
    payload
});

export const signup = payload => ({
    type: Types.Auth.SIGNUP,
    payload
});

export const signupSuccess = payload => ({
    type: Types.Auth.SIGNUP_SUCCESS,
    payload
});

export const signupFail = payload => ({
    type: Types.Auth.SIGNUP_FAIL,
    payload
});

const initialState = {
    user: null,
    authToken: null,
    loginSuccess: false,
    loginError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.Auth.LOGIN_SUCCESS:
            return { ...state, loginSuccess: true, loginError: false, user: action.payload };
        case Types.Auth.LOGIN_FAIL:
            return { ...state, loginError: action.payload, loginSuccess: false };
        default:
            return state;
    }
};