import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Routes from '../routes';

import HomePage from '../pages/HomePage';
import LocationPage from '../pages/LocationPage';

test('Router should correctly route to homepage ', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <Routes />
    </MemoryRouter>
  );
  expect(wrapper.find(HomePage)).toHaveLength(1);
  expect(wrapper.find(LocationPage)).toHaveLength(0);
});
