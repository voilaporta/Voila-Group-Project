import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postCriteria(action) {
    try{
        axios.post('/api/step3/criteria', action.payload);
        console.log('posting criteria', action.payload);
    }catch (error) {
        console.log('error with posting criteria', error)
    }
}

function* getCriteria(action) {
    try{
        const response = yield axios.get('/api/step3/criteria/' + action.payload)
        console.log('this is user criteria', response.data)
        yield put ({type: 'SET_CRITERIA', payload: response.data});
    }catch (error) {
        console.log('error with getting criteria', error);
    }
}

function* updateCriteria(action) {
    try{
        axios.put('/api/step3/criteria', action.payload);
        console.log('updating criteria', action.payload)
    }catch (error) {
        console.log('error with updating criteria', error);
    }
}

function* postShowing(action) {
    try{
        axios.post('/api/step3/showing/', action.payload);
        console.log('posting showing request', action.payload);
    }catch (error) {
        console.log('error with posting showing request', error)
    }
}

function* getShowing(action) {
    try{
        const response = yield axios.get('/api/step3/showing/' + action.payload)
        console.log('this is showing request', response.data)
        yield put ({type: 'SET_SHOWING', payload: response.data});
    }catch (error) {
        console.log('error with getting showing', error);
    }
}

function* postOfferMade(action) {
    try{
        axios.post('/api/step3/offer', action.payload);
        console.log('posting offer made', action.payload);
    }catch (error) {
        console.log('error with posting offer made', error)
    }
}


function* onTheHuntSaga() {
    yield takeLatest('POST_CRITERIA', postCriteria)
    yield takeLatest('GET_CRITERIA', getCriteria)
    yield takeLatest('UPDATE_CRITERIA', updateCriteria)
    yield takeLatest('POST_SHOWING', postShowing)
    yield takeLatest('GET_SHOWING', getShowing)
    yield takeLatest('POST_OFFER_MADE', postOfferMade)
}

export default onTheHuntSaga;