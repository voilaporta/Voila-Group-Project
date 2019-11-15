const showingReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_SHOWING':
            return action.payload
        default:
        return state;
    }
}

export default showingReducer;