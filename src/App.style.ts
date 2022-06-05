import styled, {createGlobalStyle} from 'styled-components';
//@ts-ignore
import BGImage from './img/main-background.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sixing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > p {
    color: black;
  }
  
  .score {
    color: black;
    font-sixe: 2rem;
    margin: 0;
  }
  
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    //background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    //background-clip: text;
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgda(0, 0, 0, 0.25);
    
  }
  
`;