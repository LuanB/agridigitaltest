import React from 'react';
import { shallow, mount, render } from 'enzyme';
import LocationSearch from '../pages/LocationPage';

describe('LocationSearch component have correct initial state for searchTerm, searchResults, locationDetails ', () => {
  let dummydata;
  let wrapper;
  let props;
  dummydata = {};
  const onIconClickMock = jest.fn();
  const onChangeMock = jest.fn();
  const mockValue = jest.fn();
  const mockSearchTerm = jest.fn();
  const mockIsSearching = jest.fn();
  const mockClearSearch = jest.fn();
  const mockHandleSearch = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <LocationSearch
        className="location-search"
        searchTerm={mockSearchTerm}
        isSearching={mockIsSearching}
        handleSearchChange={mockHandleSearch}
        handleClearSearch={mockClearSearch}
        handleSearch={mockHandleSearch}
      />
    );

    props = wrapper.props();
  });

  describe('LocationSearch component should respond to change event and call handlers', () => {
    // it(`1. makes sure that component exists`, () => {
    //   expect(wrapper.exists()).toBeTruthy();
    // });
    it('3. simulating onChange for the input element', () => {
      const event = {
        target: { value: 'test value' }
      };

      // expect(hct.calledOnce).to.eql(true);
    });
  });
});
