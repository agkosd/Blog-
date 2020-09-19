export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};
