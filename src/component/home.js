import { Tabs  } from 'antd';
import React, {useState} from 'react';
import Header from "./header";
import Footer from "./footer";
import MoviesData from "./movieData";
import 'antd/dist/antd.css';
import "../../src/index.css"

const { TabPane } = Tabs;

function TabSection(props) {
  const [Tab, SetTab] = useState("1");
  const onChange = (key) => {
    SetTab(key);
  };

  return(
    <div>
      <Header />
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="All Best Movie" key="1">
          {Tab === "1" ?
            <MoviesData {...props} apiTrigger={Tab} favouriteValue = {false}/> : ""}
          </TabPane>
          <TabPane tab="Your Favourite Movie" key="2">
          {Tab === "2" ?

            <MoviesData  {...props}  apiTrigger={Tab} favouriteValue = {true}/> : ""}
          </TabPane>
        </Tabs>
        <Footer />
   </div>
  )
};

export default TabSection;