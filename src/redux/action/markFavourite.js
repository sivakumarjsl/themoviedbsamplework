
import axios from 'axios';
import {THE_MOVIE_DB_KEY, accountID} from "../../constant"
import * as types from '../actionConstant';

export const markFavourite = (data, favouriteValue) => dispatch => {
    dispatch({ type: types.UPDATE_MOVIE.REQUEST })
    axios.post(`https://api.themoviedb.org/3/account/${accountID}/favorite?api_key=${THE_MOVIE_DB_KEY}&session_id=069de40e942830d391ee78d0a3a8e7d5a08df9ec`,
    {
        "media_type": "movie",
        "media_id": data.id,
        "favorite": favouriteValue
      }
    )
        .then(res => {
            dispatch({ type: types.UPDATE_MOVIE.SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: types.UPDATE_MOVIE.FAILED, payload: err })
        })
}








