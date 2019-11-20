const initialState = {
    loading: true,
    values: []
}

const showingReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SHOWING':
            return {
                loading: false,
                values: action.payload
            }
        default:
            return state;
    }
}

export default showingReducer;