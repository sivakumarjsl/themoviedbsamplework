
import React, { useState, useEffect } from "react";
import { Table, Space, Input, Row, Col } from 'antd';
import {
  HeartOutlined,
  HeartFilled
} from '@ant-design/icons';
import Spinner from "./spinner"


function MoviesData(props) {
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState("");
  const [loader, setLoader] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [errData, setErrData] = useState("");
  const [sortedInfo, setSortedInfo] = useState({});
    
  // initial Page setup 
  useEffect(() => {
    setpage(1)
  }, []);

  // get best movie api trigger 
  useEffect(() => {
    if(page) {
      setLoader(true)
      props.getMovieDataAct(page, props.favouriteValue)
    }
  }, [page]);


  useEffect(() => {
    if(favorite !== props.apiTrigger) {
      if(favorite !== false) {
        setFavorite(props.apiTrigger)
        setLoader(true)
        props.getMovieDataAct(page, props.favouriteValue)
      } else {
        setFavorite(props.apiTrigger)
      }
  
    }
  }, [props.apiTrigger]);

  // update movie data in state 
  useEffect(() => {
    console.log("getMovieData", props.getMovieData)
    if(props.getMovieData.getMovieData.length) {
      setLoader(false)
      setMovies(props.getMovieData.getMovieData)

    } else if(props.getMovieData.error) {
      setLoader(false)
      setErrData(props.getMovieData.error)
    }
     
  }, [props.getMovieData]);


  console.log("MoviesData", movies)
  // Table header 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
    },
   
    {
      title: 'Year of release',
      dataIndex: 'release_date',
      
    },

    {
      title: 'Rating (Out of 10)',
      dataIndex: 'vote_average',
      sorter: {
            compare: (a, b) => a.vote_average - b.vote_average,
            multiple: 10,
          },
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a onClick={()=> rowDataMovie(record)}>Detail</a>
          <a onClick={()=> marked(record, props.favouriteValue)}> {!props.favouriteValue ? <HeartOutlined /> : 
          <HeartFilled />}
          
          </a>
        </Space>
      ),
    },
  ];


   // get row movie data 
   const marked = (record, favouriteValue ) => {
    props.markFavourite(record, favouriteValue)
  }
  

  // get row movie data 
  const rowDataMovie = (record) => {
    window.location.href = `/${record.id}`
  }
  
  const onChange = (pagination, filters, sorter, extra) => {
    setpage(pagination.current)
    setSortedInfo(sorter);
  };


  const handleSearch = (value) => {

      if(value) {
        const newArr = props.getMovieData.getMovieData.filter((item, index) => 
        (item.title.toUpperCase()).includes(value.toUpperCase()) 
        || item.release_date.includes(value) 
        || ((item["vote_average"]).includes(value) 
        )
        )
        setMovies(newArr)
      } else {
        setMovies(props.getMovieData.getMovieData)
      }
     
  };


  return (
    
        <div className="tableSection">
          <h1> {props.favouriteValue ? "Favourite Movies" : "All Movies"}</h1>

          {loader ?
              <Spinner/> 
            :
              errData 

              ?
                <div className="errMsg">{errData}</div>
              :
              <>
                <Input className= "searchBox" placeholder="search title, date" onChange= {(event)=>handleSearch(event.target.value)}  size="large" />
                <Table columns={columns}
                  rowKey={obj => obj.id} 
                  dataSource={movies} 
                  pagination={{ defaultPageSize: 10, 
                  showSizeChanger: true, pageSizeOptions: [ '10']}}
                  onChange={onChange} 
                />
              </>

          }
        </div>
     
  );
}

export default MoviesData;

