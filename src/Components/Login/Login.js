/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useState, useEffect, useCallback } from 'react';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router-dom';
import submit from './Submit';
import loginStyles from './Login.style';

function Login() {
    const [credentials, setCredentials] = useState({});
    const [loggedin, setLoggedin] = useState(false);
    const [startLogin, setStartLogin] = useState(false);

    // Set user credentials in state
    const setUser = () => {
        const userElem = document.querySelector('input[name=username]');
        const passElem = document.querySelector('input[name=password]');
        if (userElem.value && passElem.value) {
            setCredentials({
                username: userElem.value,
                password: passElem.value
            });
        } else {
            window.alert('Username and password can not be blank');
        }
    }

    const loginUser = useCallback(status => {
        if (status) {
            localStorage.setItem('loggedin', status);
            localStorage.setItem('username', credentials.username);
            setLoggedin(status);
        }
    }, [credentials.username]);

    // Submit user info
    useEffect(() => {
        if (Object.entries(credentials).length !== 0 && credentials.constructor === Object) {
            submit(credentials, loginUser, setStartLogin);
        }
    }, [credentials, loginUser]);

    if (loggedin) {
        return <Redirect to='/search' />;
    } else {
        return (
            <Fragment>
                <section css={loginStyles}>
                    <div className='loginDiv'>
                        <h2>STAR WARS LOGIN</h2>
                        <input type="text" name="username" placeholder="username" />
                        <input type="password" name="password" placeholder="password" />
                        {startLogin && !loggedin ? <Loader
                            className='loader'
                            type="ThreeDots"
                            color="#00BFFF"
                            height={20}
                            width={100}
                        /> :
                            <button className='loginBtn' onClick={() => { setUser(); setStartLogin(true) }}>Login</button>
                        }
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Login;
