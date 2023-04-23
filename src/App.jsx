import styled from "styled-components";
import CustomCursor from "./utils/CustomCursor";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: black;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  background-color: black;
  @media only screen and (min-width: 769px) {
    cursor: none;
  }
`;

function App() {
  return (
    <>
      <CustomCursor />
      <Wrapper>
        <Navbar />
        <Container>
          <Hero />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
