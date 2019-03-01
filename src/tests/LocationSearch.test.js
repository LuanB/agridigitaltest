import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LocationSearch from '../pages/LocationPage';

describe('LocationSearch component have correct initial state for searchTerm, searchResults, locationDetails ', () => {
  it('renders in search input', () => {
    expect(shallow(<LocationSearch />).find('input')).toEqual(1);
  });
});
