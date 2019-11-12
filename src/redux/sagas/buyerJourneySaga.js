import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getUserJourney (action){
    try{
        const response = yield axios.get(`/api/journey`);
        yield put({type: 'SET_JOURNEY', payload: response.data});
    }catch (error){
        console.log('error getting journey for this user', error);
    }
}




function* journeySaga() {
    yield takeLatest('GET_JOURNEY', getCollection);
    yield takeLatest('ADD_COLLECTION', addCollection);
  }
  
  export default journeySaga;