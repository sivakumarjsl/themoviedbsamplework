import { connect } from "react-redux";
import DetailView from "./../component/detailView"
import { getDetailViewAct } from "../redux/action/getDetailView"
import { markFavourite } from "../redux/action/markFavourite"

const mapDispatchToProps = dispatch => ({
    getDetailViewAct: (id)=>dispatch(getDetailViewAct(id)),
    markFavourite: (data, favouriteValue)=>dispatch(markFavourite(data, favouriteValue)),

});

const mapStateToProps = state => ({
    getDetailViewReducer: state.getDetailViewReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
