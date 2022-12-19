import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	button {
		padding : 5px;
    margin : 2px;
    border-radius : 5px;
	}
`




export default function App() {
  // React 컴포넌트를 사용하듯이 사용하면 됩니다.
  return (
    <>
      <GlobalStyle />
    </>
  );
}
