import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-green: #488a7e;
    --color-green1: #66c4b3;
    --color-green2: #336065;
    --color-green3: #25494d;
    --color-green4: #1d3538;
    --color-white: #FFFFFF;
    --color-grey: #c0bcbd;
    --color-base: #d7cecf
    --color-transparencia: #99A8A5;
    --color-fontescura:#1c3025;
    --color-blue: #169EDB;
    --bg-color: #d7cecf;       
    font-family: "Inter", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;      
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;   
    
    &::-webkit-scrollbar {
      width: 0.5rem;
      
    }
    &::-webkit-scrollbar-track {
      background: rgba(153, 168, 165, 0.3);
      border-radius: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
      background: var( --color-fontescura);
      border-radius: 0.3rem;
    }
  }
  
  button {
    cursor: pointer;
    font-family: "Inter", sans-serif;
  }

  input:focus {
    border: 1px solid var(--color-green2);
  }
`;

export default GlobalStyle;