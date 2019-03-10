import * as Actions from './drawer.actions';

const initialState = {
  backgroundColor: "#4da6ff"
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.TOGGLE_BACKGROUND_COLOUR: {
      return {
        ...state,
        backgroundColor: action.payload
      };
    }
    default: {
      return state
    }
  }
};

export default reducer;
