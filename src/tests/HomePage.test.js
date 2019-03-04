import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HomePage from '../pages/HomePage';

describe('Homepage component contains the Location Search, List and details components', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(<HomePage />)
        .find('LocationSearch')
        .exists()
    ).toBe(true);
    expect(
      shallow(<HomePage />)
        .find('LocationList')
        .exists()
    ).toBe(true);
    expect(
      shallow(<HomePage />)
        .find('LocationDetails')
        .exists()
    ).toBe(false);
    // location details needs to be false becuase of the dummy data
  });
});

describe('Homepage component have correct initial state for searchTerm, searchResults, locationDetails ', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<HomePage />);
    const HomePageInstance = wrapper.instance();
    expect(wrapper.state('searchTerm')).toBe('');
    expect(wrapper.state('searchResults')).toEqual([]);
    expect(wrapper.state('locationWoeID')).toEqual(null);
    expect(wrapper.state('isSearching')).toEqual(false);
  });
});
