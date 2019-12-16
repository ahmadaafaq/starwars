import axios from 'axios';

function prepareItems(array) {
    return array.map((item) => {
        if (Object.hasOwnProperty.call(item, 'orbital_period')) {
            return {
                type: 'planet',
                name: item.name,
                gravity: item.gravity,
                terrain: item.terrain,
                population: item.population,
            };
        }
        return false;
    }).sort((a, b) => parseInt(a.population) - parseInt(b.population));
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const fetchPlanets = (searchStr, callback) => {
    return sleep(1000).then(() => {
        const apiURL = `https://swapi.co/api/planets/?search=${searchStr}`;
        axios.get(apiURL).then(response => {
            const planets = prepareItems(response.data.results);
            callback(planets);
        });
    });
};

export default fetchPlanets;