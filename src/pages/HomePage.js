import React, { Component } from 'react';

//import API from '../config/api';

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
