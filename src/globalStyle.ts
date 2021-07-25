import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
   padding: 0;
   margin: 0;
   font-family: 'Roboto', sans-serif;
 }
 *::selection {
  background-color: pink;
  color: #ef6f98; 
}
`;