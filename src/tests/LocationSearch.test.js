import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import LocationSearch from '../components/LocationSearch';

describe('LocationSearch component have correct initial state for searchTerm, searchResults, locationDetails ', () => {
  let dummydata;
  let wrapper;
  let props;
  dummydata = {};
  const onIconClickMock = jest.fn();
  const onChangeMock = jest.fn();
  const mockValue = jest.fn();
  const mockSearchTerm = 'foo';
  const mockIsSearching = jest.fn();
  const mockClearSearch = jest.fn();
  const mockHandleSearch = jest.fn();

  // beforeEach(() => {
  //   wrapper = mount(
  //     <LocationSearch
  //       searchTerm={mockSearchTerm}
  //       isSearching={mockIsSearching}
  //       handleSearchChange={mockHandleSearch}
  //       handleClearSearch={mockClearSearch}
  //       handleSearch={mockHandleSearch}
  //     />
  //   );
  // });

  describe('LocationSearch component should respond to change event and call handlers', () => {
    test('simulating onChange for the input element', () => {
      const component = mount(
        <LocationSearch
          searchTerm={mockSearchTerm}
          isSearching={mockIsSearching}
          handleSearchChange={mockHandleSearch}
          handleClearSearch={mockClearSearch}
          handleSearch={mockHandleSearch}
        />
      );

      component.find('input').simulate('change');
      expect(mockHandleSearch).toBeCalledWith('foo');
    });
  });
});
