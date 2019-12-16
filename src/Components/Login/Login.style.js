import { css } from '@emotion/core';

const loginStyles = css `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: #dddd;

    .loginDiv {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 auto;
        width: 35%;
        height: 30%;
        background: #ffff;
        color: black;
        font-size: 14px;

        input {
            height: 35px;
            width: 200px;
        }
    }

    .loginBtn {
        width: 200px;
        height: 35px;
        color: black;
        background: white;
        font-size: 14px;
        font-weight: bold;
    }
`;

export default loginStyles;
