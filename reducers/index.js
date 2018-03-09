import {combineReducers} from "redux";

let initialState = {
  test: true,
}

const allReducers = (state = initialState, action) => {
  switch (action.type) {

  case 'CHECK_TEST' :
    let newState = Object.assign({}, state);
    newState.test = !newState.test;
    return newState;

  default:
    return state
  }
};

export default combineReducers({
  allReducers
});
