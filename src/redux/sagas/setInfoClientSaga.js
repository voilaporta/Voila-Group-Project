import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* setInfoClient(action){
    console.log(action.payload);
    try{
        const response = yield axios.get('api/client/details',+action.payload);
        yield put ({ type:'INFO_CLIENT', payload:response.data})
    }
    catch(error){
        console.log('error in setInfoClient saga', error);
        
    }
    
}

function* infoSaga() {
    yield takeLatest('SET_INFO_CLIENT', setInfoClient);

  }

export default infoSaga;