import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* emailCriteria(action) {
    try{
        axios.post('/nodemailer/criteria', action.payload);
        console.log('emailing criteria', action.payload);
    }catch(error) {
        console.log('error sending email', error);
    }
};

function* emailShowing(action) {
    try{
        axios.post('/nodemailer/showing', action.payload);
        console.log('emailing showing', action.payload);
    }catch(error) {
        console.log('error sending email', error);
    }
};

function* emailOffer(action) {
    try{
        axios.post('/nodemailer/offer', action.payload);
        console.log('emailing offer', action.payload);
    }catch(error) {
        console.log('error sending email', error);
    }
};

function* mailerSaga() {
    yield takeLatest('EMAIL_CRITERIA', emailCriteria)
    yield takeLatest('EMAIL_SHOWING', emailShowing)
    yield takeLatest('EMAIL_OFFER_MADE', emailOffer)
}

export default mailerSaga;