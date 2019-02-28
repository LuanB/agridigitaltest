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
  });
});
