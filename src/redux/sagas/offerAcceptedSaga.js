import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAccpetedOffer(action) {
    try {
        const response = yield axios.get(`/api/step4/${action.userStepId}`);
        yield put({ type: 'SET_ACCEPTED_OFFER', payload: response.data })
    } catch (error) {
        console.log('error getting accepted offer', error);
    }
}

function* addAcceptedOffer(action) {
    try {
        yield axios.post(`/api/step4/criteria`, action.payload)
    } catch (error) {
        console.log('Error posting accepted offer:', error);
    }
}

function* offerAcceptedSaga() {
    yield takeLatest('GET_ACCEPTED_OFFER', getAccpetedOffer);
    yield takeLatest('ADD_ACCEPTED_OFFER', addAcceptedOffer);
}

export default offerAcceptedSaga;