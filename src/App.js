import styled from "styled-components";

const Button = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles



function App() {
  return (
    <div className="App">
    <Button as="a" href="https://twitter.com/ElvisTe78827257">Mi twitter</Button>
    <Button as="a" href="https://utd.edu.mx/">UTD</Button>
    <Button as="a" href="https://github.com/GooseCampagne">github</Button>
   
    </div>
  );
}

export default App;
