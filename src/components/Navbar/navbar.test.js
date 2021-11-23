import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import Navbar from './index';

const setWindowWidth = (width) => {
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
}

const setMobile = () => {
    setWindowWidth(700);
}

const setDesktop = () => {
    setWindowWidth(1200);
}

describe('<Navbar/>', () => {
    it('matches the desktop snapshot', () => {
        const { container } = render(<Navbar />, { wrapper: MemoryRouter });
        expect(container).toMatchSnapshot();
    });

    it('matches the mobile snapshot', () => {
        const { container } = render(<Navbar />, { wrapper: MemoryRouter });
        act(() => {
            setMobile();
        });

        expect(container).toMatchSnapshot();

        act(() => {
            setDesktop();
        });
    });

    it('renders with all menu items on desktop', () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        const navbar = getByTestId('nav');
        expect(navbar.childElementCount).toBe(2);
        expect(navbar.children[1].childElementCount).not.toBe(1);
    });

    it('renders with hamburger menu on mobile', () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        act(() => {
            setMobile();
        });
        
        const navbar = getByTestId('nav');
        expect(navbar.childElementCount).toBe(2);
        expect(navbar.children[1].childElementCount).toBe(1);

        act(() => {
            setDesktop();
        });
    })

    it('hamburger menu opens and collapses menu', async () => {
        const { getByTestId } = render(<Navbar />, { wrapper: MemoryRouter });
        act(() => {
            setMobile();
        });
        
        expect(getByTestId('nav').childElementCount).toBe(2);
        expect(getByTestId('nav').children[1].childElementCount).toBe(1);

        const hamburgerButton = getByTestId('nav').children[1];
        userEvent.click(hamburgerButton);
        await waitFor(() => expect(getByTestId('nav').childElementCount).toBe(3));

        userEvent.click(hamburgerButton);
        await waitFor(() => expect(getByTestId('nav').childElementCount).toBe(2));

        act(() => {
            setDesktop();
        });
    })
})