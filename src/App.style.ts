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
    color: #fff;
  }
  
  .score {
    color: #fff;
    font-sixe: 2rem;
    margin: 0;
  }
  
  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', san-serif;
    
  }
`;