import React, { Component } from 'react';

//import API from '../config/api';
import LocationSearch from '../components/LocationSearch';

import LocationList from '../components/LocationList';

import LocationDetails from '../components/LocationDetails';

export class HomePage extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    locationDetails: [],
    displayWeatherCards: false,
    locationWoeID: null,
    isSearching: false
  };
  handleClearSearch = () =>
    this.setState({ searchTerm: '', searchResults: [] });

  handleSearch = async (event) => {
    try {
      event.preventDefault();
      this.setState({ isSearching: true });

      const result = await API.get(
        `/api/location/search/?query=${this.state.searchTerm}`
      );

      this.setState({
        searchResults: result.data,
        isSearching: false
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleSearchChange = (searchTerm) => this.setState({ searchTerm });

  render() {
    return (
      <>
        <div>home page</div>
        <LocationSearch
          className="location-search"
          searchTerm={this.state.searchTerm}
          isSearching={this.state.isSearching}
          handleSearchChange={this.handleSearchChange}
          handleClearSearch={this.handleClearSearch}
          handleSearch={this.handleSearch}
        />
        <LocationList />
        <LocationDetails />
      </>
    );
  }
}
export default HomePage;
