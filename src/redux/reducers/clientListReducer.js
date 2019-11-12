const clientList = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CLIENT':
        return action.payload
      default:
        return state;
    }
  };

  export default clientList;