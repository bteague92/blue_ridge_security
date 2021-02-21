import "./App.css";
import Home from "./pages/home";
import Services from "./pages/services";
import Church from "./pages/church";
import Contact from "./pages/contact";
import Nav from "./shared/nav";
import Footer from "./shared/footer";
import { Route } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: auto;
  padding: 80px 0 0 0;
  max-width: 100vw;
  background-image: repeating-linear-gradient(
    45deg,
    rgb(27, 27, 27) 0px,
    rgb(27, 27, 27) 97px,
    rgb(24, 24, 24) 97px,
    rgb(24, 24, 24) 194px,
    rgb(20, 20, 20) 194px,
    rgb(20, 20, 20) 291px
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/church" component={Church} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Container>
  );
}

export default App;
