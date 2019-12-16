import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import Search from './Search';

describe('<Search />', () => {

    afterEach(cleanup);

    it('should render search page without throwing any error', () => {
        const { container } = render(<Search />);
        expect(container.querySelector('.searchBox')).toBeTruthy();
        expect(container.querySelector('a').textContent).toBe('Logout');
        expect(container.querySelector('h2').textContent).toBe('Search Planets');
        expect(container.querySelector('input[name="search"]')).toBeTruthy();
        expect(container.querySelector('.planets')).toBeTruthy();
    });
    it('should search planets', () => {
        const { container } = render(<Search />);
        const searchInput = container.querySelector('input[name="search"]');
        fireEvent.change(searchInput, {
            target: {
                value: 'Yavin'
            }
        })
        wait(() => {
            expect(container.querySelector('.resultsItem')).toBeTruthy();
        });
    });
});

