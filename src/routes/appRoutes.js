import React, { Component } from "react";
import DetailView from "./../container/detailViewContainer"
import Home from "./../container/homeContainer"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
    );
  }
}


export default (AppRoute)