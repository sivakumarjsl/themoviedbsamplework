import { combineReducers } from "redux";
import getDetailViewReducer from './reducers/getDetailViewReducer';
import getMovieReducer from './reducers/getMovieReducer';

const rootReducer = combineReducers({
    getDetailViewReducer,
    getMovieReducer,
});

export default rootReducer;
