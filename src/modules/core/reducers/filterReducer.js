import {
  SELECT_FIAT, SELECT_LIMIT
} from '../actions/filterActions'

export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_FIAT:
	  return Object.assign({}, state, {
            fiat: action.fiat
          })
	  /* {
	    ...state,
		fiat: action.fiat
	  } */
    case SELECT_LIMIT:
      return {
	    ...state,
		limit: action.limit
	  }
    default:
      return state
  }
}