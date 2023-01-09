import { connect } from "react-redux";
import Home from "./../component/home"
import { getMovieDataAct } from "../redux/action/getMovieData"
import { markFavourite } from "../redux/action/markFavourite"


const mapDispatchToProps = dispatch => ({
    getMovieDataAct: (id, tabValue)=>dispatch(getMovieDataAct(id, tabValue)),
    markFavourite: (data, favouriteValue)=>dispatch(markFavourite(data, favouriteValue)),

});

const mapStateToProps = state => ({
    getMovieData: state.getMovieReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
