import React, { Component } from 'react';

//import API from '../config/api';
import LocationSearch from '../components/LocationSearch';

import LocationList from '../components/LocationList';

import LocationDetails from '../components/LocationDetails';

export class HomePage extends Component {
  render() {
    return (
      <>
        <div>home page</div>
        <LocationSearch />
        <LocationList />
        <LocationDetails />
      </>
    );
  }
}
export default HomePage;
