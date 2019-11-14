import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getVendorType() {
    try {
        const response = yield axios.get(`/api/vendors/type`);
        yield put({ type: 'SET_VENDOR_TYPE', payload: response.data });
    } catch (error) {
        console.log('error getting vendor type', error);
    }
}

function* agentSaga() {
    yield takeLatest('GET_VENDOR_TYPE', getVendorType);
}

export default agentSaga;