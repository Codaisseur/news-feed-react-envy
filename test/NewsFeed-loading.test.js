import React from 'react';
import { shallow } from 'enzyme';

import NewsFeed from '../src/NewsFeed.js';
import RefreshIndicator from 'material-ui/RefreshIndicator';

describe('<NewsFeed />', () => {
  it('renders renders a RefreshIndicator component', () => {
    const wrapper = shallow(<NewsFeed />);
    expect(wrapper.find(RefreshIndicator).length).toBe(1)
  });
});
