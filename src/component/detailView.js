import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import {
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons';
import { Card, Button, Space } from 'antd';
import Spinner from "./spinner"
import 'antd/dist/antd.css';
  
  
  function DetailView(props) {
    const [movieDeatil, setMovieDetail] = useState([]);
    const [movieId, setMovieId] = useState("");
    const [loader, setLoader] = useState(false);
    const [errData, setErrData] = useState("");



    
   // get row movie data 
   const marked = (record, favouriteValue ) => {
    props.markFavourite(record, favouriteValue)
  }

    // get url movie Id
    useEffect(() => {
      let pathName = window.location.pathname;
      let idValue = pathName.substring(1);
      setMovieId(idValue)
    }, []);

    //trigger the api call for get detailView
    useEffect(() => {
      if(movieId !== "") {
        setLoader(true)
        props.getDetailViewAct(movieId)
      }
    }, [movieId]);
  
    // update movie data in state 
    useEffect(() => {
      if(props.getDetailViewReducer.getDetailViewData) {
        setLoader(false)
        setMovieDetail(props.getDetailViewReducer.getDetailViewData)
      } else if(props.getDetailViewReducer.error) {
        setLoader(false)
        setErrData(props.getDetailViewReducer.error)

      }
     
    }, [props.getDetailViewReducer]);
  
    return (
      <div>
        <Header />
          <div className="detailViewCard">
            <h1>Movie Detail View</h1>
            <Button  onClick ={()=> window.location.href = `/`} className="backBtn" type="primary">Back</Button>
            {loader ?
              <Spinner/> 
            : 
              errData 
              ?
                <div className="errMsg">{errData}</div>
            :
              <Card
                hoverable
                cover={movieDeatil.poster_path ? <img alt="example" src={`https://image.tmdb.org/t/p/original${movieDeatil.poster_path}`} /> : ""}
              >
                <div>
                  <h2  >Title:</h2> 
                  <div>
                    {movieDeatil.title}
                  </div>
                </div>
                <div>
                  <h2>Synopsis:</h2> 
                  <div>
                    {movieDeatil.overview}
                  </div>
                </div>
                <div>
                  <h2>Rating:</h2> 
                  <div>
                    {movieDeatil.vote_average* 10} %
                  </div>
                </div>
                
              </Card>
            }
          </div>
        <Footer />
      </div>
    );
  }
  
export default DetailView;

  
  