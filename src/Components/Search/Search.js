/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import searchStyles from './Search.style';
import fetchPlanets from './SearchPlanets';
import Planet from '../Planet/Planet';

function Search() {
    const [search, setSearch] = useState('');
    const [planets, setPlanets] = useState({});

    const planetsData = planets => {
        setPlanets(planets);
    }

    useEffect(() => {
        if (search) {
            fetchPlanets(search, planetsData);
        }
    }, [search]);

    return (
        <div css={searchStyles}>
            <section className='searchBox'>
                <ul className='userInfo'>
                    <li>Hi, {localStorage.getItem('username')}</li>
                    <li onClick={() => {
                        localStorage.setItem('loggedin', '');
                        localStorage.setItem('username', '');
                    }}><a href='/login'>Logout</a></li>
                </ul>
                <h2>Search Planets</h2>
                <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </section>
            <section className='planets'>
                {(search && Object.entries(planets).length === 0) ?
                    <Loader
                        className='loader'
                        type="Puff"
                        color="#00BFFF"
                        height={200}
                        width={200}
                    /> :
                    Object.entries(planets).length !== 0 && planets.map((item, i) => <Planet key={i} item={item} />)
                }
            </section>
        </div>
    )
}

export default Search;
