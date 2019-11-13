const offerAcceptedReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACCEPTED_OFFER':
            return action.payload
        default:
            return state;
    }
};

export default offerAcceptedReducer;