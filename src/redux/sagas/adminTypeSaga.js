import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getAdminType() {
    try {
        const response = yield axios.get(`/api/administrator/type`);
        yield put({ type: 'SET_ADMIN_TYPE', payload: response.data });
    } catch (error) {
        console.log('error getting admin type', error);
    }
}

function* agentSaga() {
    yield takeLatest('GET_ADMIN_TYPE', getAdminType);
}

export default agentSaga;