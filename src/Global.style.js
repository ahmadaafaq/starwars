import { css } from '@emotion/core';


const globalStyles = css`
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  * {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  ul {
    list-style-type: none;
  }

  .loaderHome {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);

    svg {
        margin: auto;
    }
  }
`;

export default globalStyles;