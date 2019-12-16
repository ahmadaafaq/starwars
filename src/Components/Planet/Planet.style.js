import { css } from '@emotion/core';

const planetStyles = population => css`
    .resultsItem {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 225px;
        height: 200px;
        background: #94a0ab;
        margin: 20px;
    }

    .resultsTitle {
        text-align: center;
        color: white;
        font-size: ${population.length * 2.5}px;
    }

    .resultsInfo {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 90px;
    }
`;

export default planetStyles;
