import axios from 'axios';
import {THE_MOVIE_DB_KEY, accountID} from "../../constant"
import * as types from '../actionConstant';

export const getMovieDataAct = (pageCount, favouriteValue) => dispatch => {
    console.log("favouriteValue", favouriteValue)
    let ApiUrl  =  favouriteValue ?`https://api.themoviedb.org/3/account/${accountID}/favorite/movies?api_key=${THE_MOVIE_DB_KEY}&session_id=069de40e942830d391ee78d0a3a8e7d5a08df9ec&page=${pageCount}` :
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${THE_MOVIE_DB_KEY}&page=${pageCount}`
    dispatch({ type: types.GET_MOVIE_DATA.REQUEST })
    axios.get(ApiUrl)
        .then(res => {
            dispatch({ type: types.GET_MOVIE_DATA.SUCCESS, payload: res.data, tabValue : favouriteValue, page : pageCount })
        }).catch(err => {
            dispatch({ type: types.GET_MOVIE_DATA.FAILED, payload: err.response.data })
        })
}
