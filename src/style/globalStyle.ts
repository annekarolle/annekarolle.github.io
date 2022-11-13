import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-green: #4EE60A;
    --color-green2: #6FEFD2;
    --color-green3: #0B362F;
    --color-white: #FFFFFF;
    --color-grey: #282929;
    --color-transparencia: #99A8A5;
    --color-fontescura:#101410;
    --color-blue: #169EDB;
    --bg-color: #080908;       
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

  #app__motion--page{
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #app__motion--content {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  #app__motion--modal{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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