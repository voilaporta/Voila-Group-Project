import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchVendor(){
    try{
      const response = yield axios.get('/api/vendor');
      yield put ({ type:'ADD_VENDOR', payload: response.data })
    }catch (error){
      console.log('error in Fetch', error);
      
    }
  }

  function* vendorsSaga() {
    yield takeLatest('FETCH_VENDOR', fetchVendor);

  }
  
  export default vendorsSaga;