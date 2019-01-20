import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Nieuws from "./components/Nieuws";
import Map from "./components/Map";


import Footer from "./components/Footer";

class App extends Component {
  pages = [Home, Nieuws, Map];
  constructor(){
    super();
    this.state = {currentPage: Home};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, newCurrentPage){
    this.setState({currentPage:newCurrentPage});
  }

  render() {
    return (
      <div>
        {React.createElement(this.state.currentPage)}
        <Footer pages={this.pages} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
