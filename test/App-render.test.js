import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App.js';
import NewsFeed from '../src/NewsFeed.js';


describe('<App />', () => {
  it('renders renders a NewsFeed component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NewsFeed).length).toBe(1)
  });
});
