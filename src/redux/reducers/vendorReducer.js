const vendorList = (state = [], action) => {
    switch (action.type) {
      case 'ADD_VENDOR':
        return action.payload
      default:
        return state;
    }
  };

  export default vendorList;