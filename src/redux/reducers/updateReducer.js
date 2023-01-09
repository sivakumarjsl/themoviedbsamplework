import * as types from "../actionConstant";

const intialState = {
  isLoading: false,
  updateMovie: "",
  error: "",
};

export default function sessionReducer(state = intialState, action) {
  switch (action.type) {
    case types.UPDATE_MOVIE.REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.UPDATE_MOVIE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateMovie: action.payload,
        error : "",
      };

    case types.UPDATE_MOVIE.FAILED:
      return {
        ...state,
        isLoading: false,
        requestToken:"",
        error: action.payload.status_message,
      };

    default:
      return state;
  }
}
