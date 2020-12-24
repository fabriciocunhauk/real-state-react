import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
}

html, body {
    overflow-x: hidden;
    height: 100vh;
}
`;