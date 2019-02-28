import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

describe('App', () => {
  const app = shallow(<App />);
  it('renders propertly', () => {
    expect(app).toMatchSnapshot();
  });
});
