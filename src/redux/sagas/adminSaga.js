import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAdmin(){
    try{
      const response = yield axios.get('/api/administrators');
      yield put ({ type:'ADD_ADMIN', payload: response.data })
    }catch (error){
      console.log('error in Fetch', error);
      
    }
  }

  function* updateAdmin(action) {
    try {
      yield axios.put('/api/administrators', action.payload);
      yield fetchAdmin();
    } catch (error) {
      console.log('error in PUT ADMIN', error);
  
    }
  }

  function* adminsSaga() {
    yield takeLatest('FETCH_ADMIN', fetchAdmin);
    yield takeLatest('UPDATE_ADMIN', updateAdmin);
  }
  
  export default adminsSaga;