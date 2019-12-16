import { css } from '@emotion/core';

const searchStyles = css `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100vh;
    width: 100%;
    background: #dddd;

    .searchBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 20%;
        height: 15%;
        background: #ffff;
        color: black;
        font-size: 14px;
        margin-left: 20px;
        margin-top: 50px;

        input {
            height: 35px;
            width: 200px;
        }

        .userInfo {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 80%;
            margin-right: 40px;
        }
    }

    .planets {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 70%;
        height: 100vh;
        background: #0f0e0e;
        color: black;
        font-size: 14px;
    }

    .loader {
        margin: 30% auto;
    }
    
`;

export default searchStyles;
