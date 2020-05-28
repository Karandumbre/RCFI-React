import { FETCH_HOME_LOAN_REQUEST, FETCH_HOME_LOAN_REQUEST_SUCCESS, FETCH_HOME_LOAN_REQUEST_FAILURE } from './types';
import axios from 'axios';


export const fetchHomeLoanRequest = () => {
    return {
        type: FETCH_HOME_LOAN_REQUEST
    }
}

export const fetchHomeLoanRequestSuccess = (data) => {
    return {
        type: FETCH_HOME_LOAN_REQUEST_SUCCESS,
        payload: data
    }
}

export const fetchHomeLoanRequestFailure = (error) => {
    return {
        type: FETCH_HOME_LOAN_REQUEST_FAILURE,
        payload: error
    }
}



export const fetchRequest = (pageno) => {
    return (dispatch) => {
        dispatch(fetchHomeLoanRequest())
        axios.get(`https://blaze.ratecity.com.au/api/search/home-loans?page=${pageno}`).then(res => {
            dispatch(fetchHomeLoanRequestSuccess(res.data))
        }).catch(error => {
            dispatch(fetchHomeLoanRequestFailure(error.message))
        })
    }
}