import React, { lazy, Suspense, Fragment } from 'react';
import {
    BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Global } from '@emotion/core';
import globalStyles from './Global.style';

const loggedIn = localStorage.getItem('loggedin');
const AsyncLogin = lazy(() => import('./Components/Login/Login'));
const AsyncSearch = lazy(() => import('./Components/Search/Search'));

const App = () => (
    <Fragment>
        <Global styles={globalStyles} />
        <BrowserRouter>
            <Suspense fallback={<Loader
                className='loaderHome'
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
            />}>
                <Switch>
                    <Route
                        exact strict path='/'
                        render={() =>
                            loggedIn ? <AsyncSearch /> : <AsyncLogin />
                        }
                    />
                    <Route
                        path='/login'
                        exact
                        component={AsyncLogin}
                    />
                    <Route
                        path='/search'
                        exact
                        render={() =>
                            loggedIn ? <AsyncSearch /> : <Redirect to='/login' />
                        }
                    />
                </Switch>
            </Suspense>
        </BrowserRouter>
    </Fragment>
);

export default App;
