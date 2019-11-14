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
    yield axios.put('/api/client', action.payload);
    yield fetchClient();
  } catch (error) {
    console.log('error in PUT', error);

  }
}
function* deleteClient(action){
  try{
    yield axios.delete(`/api/client`, {data: {id: action.payload}});
  }catch (err){
    console.log('DELETE ERROR:', err);
  }
}
function* clientsSaga() {
  yield takeLatest('FETCH_CLIENT', fetchClient);
  yield takeLatest('UPDATE_CLIENT', updateClient);
  yield takeLatest('DELETE_CLIENT', deleteClient);

}

export default clientsSaga;