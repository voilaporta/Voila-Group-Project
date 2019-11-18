const adminList = (state = [{loading:true}], action) => {
    switch (action.type) {
      case 'ADD_ADMIN':
        return action.payload
      default:
        return state;
    }
  };

  export default adminList;