import * as Actions from './drawer.actions';
import { darkMode } from '../../constants/Constants'

const initialState = {
  backgroundColor: darkMode
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
