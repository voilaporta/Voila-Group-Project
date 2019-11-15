const selectedVendorReducer = (state = [{loading:true}], action) => {
    switch(action.type){
        case 'SET_USER_INSPECTION':
            return action.payload
        default:
            return state;
    }
}

export default selectedVendorReducer;