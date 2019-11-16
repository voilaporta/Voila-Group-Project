const initialState = {
    loading: true,
    values: []
}

const selectedVendorReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER_INSPECTION':
            return {
                loading: false,
                values: action.payload
            }
        default:
            return state;
    }
}

export default selectedVendorReducer;