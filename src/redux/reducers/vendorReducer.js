
const vendorList = (state = [{loading:true}], action) => {
    switch (action.type) {
      case 'ADD_VENDOR':
        return action.payload;
      
      default:
        return state;
    }
  };

  export default vendorList;