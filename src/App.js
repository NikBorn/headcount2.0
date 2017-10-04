import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js';
import Header from './components/Header.js';
import GraphCatalog from './components/GraphCatalog.js';
import Searchbar from './components/Searchbar.js';

import kindergarten from '../data/kindergartners_in_full_day_program.js';

let districtObj = new DistrictRepository(kindergarten)

class App extends Component {
  constructor() {
    super()
    this.state = {
      schoolDistricts: districtObj.findAllMatches()
    };
    this.searchForDistricts =this.searchForDistricts.bind(this)
  }

  searchForDistricts(searchTerm) {
    console.log('Hit!')
    console.log(searchTerm)
    this.setState({
      schoolDistricts: districtObj.findAllMatches(searchTerm)
    });
  }

  render() {
    return (
      <div>
        <Header searchForDistricts={ this.searchForDistricts } />
        <GraphCatalog schoolDistricts={ this.state.schoolDistricts } />
      </div>            
    );
  }
}

export default App;
