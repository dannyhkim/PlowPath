// import * as Actions from './drawer.actions';
//
// const initialState = {
//   backgroundColor:
// };
//
// const reducer = function (state = initialState, action) {
//   switch (action.type) {
//     case Actions.LOAD_HEATMAP_DATA: {
//       return {
//         ...state,
//         ...action.payload
//       };
//     }
//
//     case Actions.FILTER_QUESTIONS:
//     case Actions.FILTER_EMPTY_COLUMNS:
//     case Actions.FILTER_CATEGORIES: {
//       return {
//         ...state,
//         filters: state.filters.indexOf(action.type) > -1 ? state.filters.filter(filter => filter !== action.type) : [...state.filters, action.type]
//       }
//     }
//
//     default: {
//       return state
//     }
//   }
// };
//
// export default reducer;
