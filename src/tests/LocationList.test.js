import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import LocationList from '../components/LocationList';

Enzyme.configure({ adapter: new Adapter() });

describe('LocationList component displays a table or not depending on available data', () => {
  const dummyData = [{ a: 'foo', b: 'bar' }, { a: 'fooB', c: 'barB' }];
  const mockHandleLocationClick = jest.fn();
  const mockSearchResultsState = dummyData;

  const wrapper = shallow(
    <LocationList
      searchResults={mockSearchResultsState}
      locationClicked={mockHandleLocationClick}
    />
  );

  test('component renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('component displays table with dummyData', () => {
    expect(wrapper.find('table').exists()).toBe(true);
  });
});
