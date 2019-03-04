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

  test('component displays table with dummyData', () => {
    const wrapper = shallow(
      <LocationList
        searchResults={dummyData}
        locationClicked={mockHandleLocationClick}
      />
    );
    expect(wrapper.find('.renderTable')).toHaveLength(1);
  });

  test('component does not display table with 0 dummydata', () => {
    const wrapper = shallow(
      <LocationList
        searchResults={[]}
        locationClicked={mockHandleLocationClick}
      />
    );

    expect(wrapper.find('.noTable')).toHaveLength(1);
  });
});
