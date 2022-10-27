import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	button {
		padding : 5px;
    margin : 2px;
    border-radius : 5px;
	}
`

//Styled Components로 컴포넌트를 만들고
const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;

// 만들어진 컴포넌트를 재활용하여 컴포넌트 만들기
const BigBlueButton = styled(BlueButton)`
  padding: 10px;
  margin-top: 10px;
`

// 재활용한 컴포넌트를 재활용하기
const BigRedButton = styled(BigBlueButton)`
  background-color: red;
`;

const Button1 = styled.button`
  background: ${(props) => (props.skyblue ? "skyblue" : "white")};
`;

// 받아온 prop값을 그대로 이용해 렌더링하기
const Button3 = styled.button`
  background: ${(props) => (props.color ? props.color : "White")};
`;
// 다음 방법으로도 활용 가능
const Button4 = styled.button`
  background: ${(props) => props.color || "white"};
`;

// practice
const Button5 = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background: powderblue;
  border-radius: 1rem;
  transition: 0.5s;
  &:hover{
    background: cornflowerblue;
    color: white;
    transition: 0.5s;  
  }
`


export default function App() {
  // React 컴포넌트를 사용하듯이 사용하면 됩니다.
  return (
    <>
      <GlobalStyle />
      <BlueButton>Blue Button</BlueButton>
      <br />
      <BigBlueButton>Big Blue Button</BigBlueButton>
      <br />
      <BigRedButton>Big Red Button</BigRedButton>
      <br />
      <Button1>Button1</Button1>
      <Button1 skyblue>Button1</Button1>
      <br />

      <Button3>Button3</Button3>
      <Button3 color="orange">Button3</Button3>
      <Button3 color="tomato">Button3</Button3>
      <br />
      <Button4>Button4</Button4>
      <Button4 color="pink">Button4</Button4>
      <Button4 color="turquoise">Button4</Button4>
      <br />
      <Button5 id="practice">Practice!</Button5>
    </>
  );
}
