import axios from 'axios';
import {THE_MOVIE_DB_KEY} from "../../constant"
import * as types from '../actionConstant';

export const getDetailViewAct = (movieId) => dispatch => {
    dispatch({ type: types.GET_MOVIE_DETAIL_VIEW.REQUEST })
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${THE_MOVIE_DB_KEY}`)
        .then(res => {
            dispatch({ type: types.GET_MOVIE_DETAIL_VIEW.SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: types.GET_MOVIE_DETAIL_VIEW.FAILED, payload: err.response.data })
        })
}

// poster Url  https://image.tmdb.org/t/p/original/2CAL2433ZeIihfX1Hb2139CX0pW.jpg
