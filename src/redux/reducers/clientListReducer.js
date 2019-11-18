const clientList = (state = [{loading:true}], action) => {
    switch (action.type) {
      case 'ADD_CLIENT':
        return action.payload
      default:
        return state;
    }
  };

  export default clientList;