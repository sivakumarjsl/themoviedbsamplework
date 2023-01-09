import * as types from "../actionConstant";

const intialState = {
  isLoading: false,
  getDetailViewData: "",
  error: "",
};

export default function getDetailViewReducer(state = intialState, action) {
  switch (action.type) {
    case types.GET_MOVIE_DETAIL_VIEW.REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_MOVIE_DETAIL_VIEW.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error : "",
        getDetailViewData: action.payload,
      };

    case types.GET_MOVIE_DETAIL_VIEW.FAILED:
      return {
        ...state,
        isLoading: false,
        getDetailViewData:"",
        error: action.payload.status_message,
      };

    default:
      return state;
  }
}
