import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background: #121214;
    --gray-500: #202024;
    --white: #FFFFFF;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;
    --title: #E1E1E6;
    --text: #C4C4CC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html  {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
