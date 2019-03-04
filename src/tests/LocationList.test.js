import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import LocationList from '../components/LocationList';

Enzyme.configure({ adapter: new Adapter() });

describe('LocationList component displays a table or not depending on available data', () => {
  const dummyData = [{ a: 'foo', b: 'bar' }];
  const mockHandleLocationClick = jest.fn();
  const mockSearchResultsState = dummyData;

  test('component renders', () => {
    const wrapper = shallow(
      <LocationList
        searchResults={dummyData}
        locationClicked={mockHandleLocationClick}
      />
    );

    expect(wrapper.exists()).toBe(true);
  });
  /// something wrong with here
  test('component displays table with dummyData', () => {
    const wrapper = shallow(
      <LocationList
        searchResults={dummyData}
        locationClicked={mockHandleLocationClick}
      />
    );

    // expect(wrapper.prop('searchResults').toExist())).toBe(true);
  });
});
