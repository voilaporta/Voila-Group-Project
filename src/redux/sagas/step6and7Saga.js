import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';



    function* addInspection(action){
        try{
            yield axios.post('/api/step6', action.payload);
            yield put ({ type:'GET_USER_INSPECTION', payload: action.payload })
        }catch (error){
            console.log('error in Fetch', error);
        
        }
    }

    function* getUserInspection(action){
        try{
            const response = yield axios.get(`/api/step6/${action.payload.user_step_id}`);
            yield put ({ type:'SET_USER_INSPECTION', payload: response.data })
        }catch (error){
            console.log('error getting user inspection data', error);
        
        }
    }

    function* step6and7Saga() {
        yield takeLatest('ADD_INSPECTION', addInspection);
        yield takeLatest('GET_USER_INSPECTION', getUserInspection);
    }


export default step6and7Saga;