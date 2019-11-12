import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchClient(){
    try{
      const response = yield axios.get('/api/client');
      yield put ({ type:'ADD_CLIENT', payload: response.data })
    }catch (error){
      console.log('error in Fetch', error);
      
    }
  }

  function* clientsSaga() {
    yield takeLatest('FETCH_CLIENT', fetchClient);

  }
  
  export default clientsSaga;