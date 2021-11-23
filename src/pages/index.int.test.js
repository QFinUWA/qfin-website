import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

describe('<Home/>', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  })
})