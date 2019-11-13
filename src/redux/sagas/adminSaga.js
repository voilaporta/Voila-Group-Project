import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAdmin(){
    try{
      const response = yield axios.get('/api/admin');
      yield put ({ type:'ADD_ADMIN', payload: response.data })
    }catch (error){
      console.log('error in Fetch', error);
      
    }
  }

  function* adminsSaga() {
    yield takeLatest('FETCH_ADMIN', fetchAdmin);

  }
  
  export default adminsSaga;