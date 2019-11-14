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
  function* updateVendor(action) {
    try {
      yield axios.put('/api/vendor', action.payload);
      yield fetchVendor();
    } catch (error) {
      console.log('error in PUT ADMIN', error);
  
    }
  }

  function* vendorsSaga() {
    yield takeLatest('FETCH_VENDOR', fetchVendor);
    yield takeLatest('UPDATE_VENDOR', updateVendor);

  }
  
  export default vendorsSaga;