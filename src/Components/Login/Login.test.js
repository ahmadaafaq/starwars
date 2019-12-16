import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import Login from './Login';

describe('<Login />', () => {

    afterEach(cleanup);

    it('should render login page along with username password and button', () => {
        const { container } = render(<Login />);
        expect(container.querySelector('.loginDiv')).toBeTruthy();
        expect(container.querySelector('h2').textContent).toBe('STAR WARS LOGIN');
        expect(container.querySelector('input[name="username"]')).toBeTruthy();
        expect(container.querySelector('input[name="password"]')).toBeTruthy();
        expect(container.querySelector('.loginBtn')).toBeTruthy();
        expect(container.querySelector('.loginBtn').textContent).toBe('Login');
    });
    it('should login user', () => {
        const submit = jest.fn();
        const { container } = render(<Login />);
        const loginBtn = container.querySelector('.loginBtn');
        const username = container.querySelector('input[name="username"]');
        const password = container.querySelector('input[name="password"]');
        username.value = 'Luke Skywalker';
        password.value = '19BBY';
        fireEvent.click(loginBtn);
        wait(() => {
            expect(submit).toHaveBeenCalled();
        })
    });
});

