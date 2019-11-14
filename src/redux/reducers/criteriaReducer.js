const criteriaReducer = (state = [], action) => {
    // console.log('in criteriaReducer', action.payload);
    switch(action.type){
        case 'SET_CRITERIA':
            return action.payload
        default:
            return state;
    }
};

export default criteriaReducer;