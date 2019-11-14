const criteriaReducer = (state = [], action) => {
    console.log('in criteriaReducer', action);
    switch(action.type){
        case 'SET_CRITERIA':
            return action.payload
        default:
            return state;
    }
};

export default criteriaReducer;