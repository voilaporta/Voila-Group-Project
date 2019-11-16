
const initialState = {
  loading: true,
  values: []
}
//TODO reset initial state and returned states when we have the team to re-work client side

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