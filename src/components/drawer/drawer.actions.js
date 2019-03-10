export const TOGGLE_BACKGROUND_COLOUR = 'TOGGLE_BACKGROUND_COLOUR';

export function togglebackgroundColor(color) {
  return dispatch => {
    return dispatch({
      type: TOGGLE_BACKGROUND_COLOUR,
      payload: color === '#424242' ? '#4da6ff' : '#424242'
    })
  }
}