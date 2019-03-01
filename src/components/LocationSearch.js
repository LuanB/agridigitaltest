import React, { Component } from 'react';

import { Form, Button, Input } from 'element-react';

export class LocationSearch extends Component {
  render() {
    return (
      <>
        <div>LocationSearch component</div>
        <Form inline={true} onSubmit={this.props.handleSearch}>
          <Form.Item>
            <Input
              placeholder="Search Weather Info for location...."
              value={this.props.searchTerm}
              icon="circle-cross"
              onIconClick={this.props.handleClearSearch}
              onChange={this.props.handleSearchChange}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="info"
              icon="search"
              onClick={this.props.handleSearch}
              loading={this.props.isSearching}
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
export default LocationSearch;
