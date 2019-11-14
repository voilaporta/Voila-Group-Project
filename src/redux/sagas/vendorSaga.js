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

  function* getInspectors(){
    try{
      const response = yield axios.get('/api/step6/vendors');
      yield put({type: 'SET_INSPECTORS', payload: response.data});

    } catch (error){
      console.log('error getting inspection vendors');
    }
  }

  function* vendorsSaga() {
    yield takeLatest('FETCH_VENDOR', fetchVendor);
    yield takeLatest('GET_INSPECTORS', getInspectors);
  }
  
  export default vendorsSaga;