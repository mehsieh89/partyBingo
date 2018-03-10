import {combineReducers} from "redux";

let initialState = {
  board: [],
}

const allReducers = (state = initialState, action) => {
  switch (action.type) {

  case 'IMPORT_BOARD' :
    let newState = Object.assign({}, state);
    newState.board = action.payload;
    return newState;

  default:
    return state
  }
};

export default combineReducers({
  allReducers
});
