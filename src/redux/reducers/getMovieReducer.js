import * as types from "../actionConstant";


const intialState = {
  isLoading: false,
  getMovieData: [],
  error: "",
  tabValue: false, 
  pageCountValue : 1
};

export default function getMovieReducer(state = intialState, action) {
  switch (action.type) {
    case types.GET_MOVIE_DATA.REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_MOVIE_DATA.SUCCESS:
      return {
        ...state,
        isLoading: false,
        tabValue : action.tabValue,
        error: "",
        getMovieData: state.tabValue === action.tabValue ? [...state.getMovieData, ...action.payload.results]
        : [...action.payload.results],
        pageCountValue : action.payload.total_pages,

      };

    case types.GET_MOVIE_DATA.FAILED:
      return {
        ...state,
        isLoading: false,
        getMovieData:[],
        pageCountValue : 1,
        error: action.payload.status_message,
      };

    default:
      return state;
  }
}
