import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchClient() {
  try {
    const response = yield axios.get('/api/client');
    yield put({ type: 'ADD_CLIENT', payload: response.data })
  } catch (error) {
    console.log('error in Fetch', error);

  }
}

function* updateClient(action) {
  try {
    yield axios.put('/api/client/update', action.payload);
  } catch (error) {
    console.log('error in PUT', error);

  }
}

function* clientsSaga() {
  yield takeLatest('FETCH_CLIENT', fetchClient);
  yield takeLatest('UPDATE_CLIENT', updateClient);

}

export default clientsSaga;