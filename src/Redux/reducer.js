import { FETCH_HOME_LOAN_REQUEST, FETCH_HOME_LOAN_REQUEST_SUCCESS, FETCH_HOME_LOAN_REQUEST_FAILURE } from './types';

const initialState = {
    loading: false,
    data: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOME_LOAN_REQUEST:
            return {
                ...state,
                loading: true
            };

        case FETCH_HOME_LOAN_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false, data: action.payload, error: ''
            };

        case FETCH_HOME_LOAN_REQUEST_FAILURE:
            return {
                ...state,
                loading: false, data: [], error: action.payload
            };

        default:
            return state;
    }
}

export default reducer;