import { CHANGE_CATALOG_CONTENT, SETUP_AUTH_USER } from '../actions/constants';
export function mainReducer(state = 0, action) {
  switch (action.type) {
    case CHANGE_CATALOG_CONTENT:
      return { ...state, catalogContent: action.catalogContent }
    case SETUP_AUTH_USER:
      return { ...state, authUser: action.authUser }
    default:
      return state;
  }
}