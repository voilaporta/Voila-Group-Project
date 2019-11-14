const infoClient=(state=[], action)=>{
    switch(action.type){
        case 'INFO_CLIENT':
            return action.payload
            default:
                return state
    }
}

export default infoClient;