import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Icon } from 'element-react';

export class LocationList extends Component {
  fetchLocationDetails = (e) => {
    const location = e.target.getAttribute('locationwoeid');
    console.log('we need to get details for ', location);
    console.log(e);
  };

  drawtable = (locations) => {
    return (
      <div className="renderTable" style={{ overflow: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell align="right">Location Type</TableCell>
              <TableCell align="right">latt_long</TableCell>
            </TableRow>
          </TableHead>
        </Table>

        <div style={{ overflow: 'auto', maxHeight: '250px' }}>
          <Table style={{ tableLayout: 'fixed' }}>
            <TableBody>
              {locations.map((location) => (
                <TableRow
                  key={location.title}
                  locationwoeid={location.woeid}
                  onClick={() => this.props.locationClicked(location.woeid)}
                  hover={true}
                >
                  <TableCell component="th" scope="row">
                    {location.title}
                  </TableCell>
                  <TableCell align="right"> {location.location_type}</TableCell>
                  <TableCell align="right"> {location.latt_long}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };

  render() {
    let { searchResults } = this.props;
    searchResults = searchResults || 0;
    const locations = searchResults.length > 0 ? searchResults : 0;
    console.log('location is');
    console.log(locations);

    return (
      <>
        {searchResults.length > 0 ? (
          <h2 className="text-green">
            <Icon type="success" name="check" className="icon" />
            {searchResults.length} Results
          </h2>
        ) : (
          <h2 className="header">
            <img
              src="https://icon.now.sh/pin_drop/527FFF"
              alt="Search Location Icon"
              className="large-icon"
            />
            Locations
          </h2>
        )}
        {locations.length > 0 ? (
          this.drawtable(locations)
        ) : (
          <div className="noTable">No table data yet</div>
        )}
      </>
    );
  }
}

export default LocationList;
