const vendorList = (state = [{loading:true}], action) => {
    switch (action.type) {
      case 'ADD_VENDOR':
        return action.payload;
      case 'SET_INSPECTORS':
        return action.payload;
      case 'SET_INSURANCE':
        return action.payload;
      default:
        return state;
    }
  };

  export default vendorList;