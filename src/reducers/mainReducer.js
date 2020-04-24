import { CHANGE_CATALOG_CONTENT } from '../actions/constants';
export function mainReducer(state = 0, action) {
    switch (action.type) {
      case CHANGE_CATALOG_CONTENT:
        return { ...state, catalogContent: action.catalogContent }
      default:
        return state;
    }
  }