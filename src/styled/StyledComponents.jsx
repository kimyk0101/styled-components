import styled from "styled-components";

//  새 컴포넌트 생성 (fnevTZ: 똑같은 이름 없게끔 styled-components가 생성 -> 일반적인 이름 쓰더라도 절대 겹칠 일이 없음)
const Wrapper = styled.div`
  padding: 1em;
  background: grey;
`;
//  `` -> 함수 (단순 스타일 x)
const Title = styled.h1`
  color: white;
  font-size: 1.5em;
  text-align: center;
`;

function StyledComponents() {
  return (
    <Wrapper>
      <Title>Styled Components</Title>
    </Wrapper>
  );
}

export default StyledComponents;
