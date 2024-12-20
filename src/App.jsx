import StyledComponents from "./styled/StyledComponents";
import PropsComponents from "./styled/PropsComponents";
import StyledDiv from "./styled/UserPropsComponents";

function App() {
  return (
    <div>
      <h1>StyledComponents</h1>
      <StyledComponents />
      <h1>PropsComponents</h1>
      {/* <PropsComponents /> */}
      <h1>UserPropsComponents</h1>
      <StyledDiv dark={false} />
      <StyledDiv dark={true} />
    </div>
  );
}

export default App;
