/** @jsx jsx */
import { jsx } from '@emotion/core';
import planetStyles from './Planet.style';

const Planet = props => (
    <section css={planetStyles(props.item.population)}>
        <div className="resultsItem">
            <h2 className="resultsTitle">
                {props.item.name}
            </h2>
            <ul className="resultsInfo">
                <li>Terrain <span>{props.item.terrain}</span> </li>
                <li>Gravity <span>{props.item.gravity}</span> </li>
                <li>Population <span>{props.item.population}</span> </li>
            </ul>
        </div>
    </section>
);

export default Planet;
