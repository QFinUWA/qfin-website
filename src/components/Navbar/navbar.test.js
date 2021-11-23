import React from 'react';
import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import Navbar from './index';

describe('<Navbar/>', () => {
    it('matches the snapshot', () => {
        const { container } = render(<Navbar />, { wrapper: MemoryRouter });
        expect(container).toMatchSnapshot();
    });

    it('renders with all menu items on desktop', () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        const navbar = getByTestId('nav');
        expect(navbar.childElementCount).toBe(2);
        expect(navbar.children[1].childElementCount).not.toBe(1);
    });
})