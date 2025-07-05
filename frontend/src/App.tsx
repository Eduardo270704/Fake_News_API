import { GlobalStyle } from "./styles/GlobalStyle";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RoutesApp from "./routes";

const Nav = styled.nav`
  background-color: #1e90ff;
  padding: 1rem;
  display: flex;
  gap: 1rem;

  a {
    color: white;
    font-weight: bold;
  }
`;

function App() {
  return (
    <main>
      <GlobalStyle />
      <Nav>
        <Link to="/">Classificar</Link>
        <Link to="/historico">Histórico</Link>
        <Link to="/status">Status</Link>
      </Nav>
      <RoutesApp />
    </main>
  );
}

export default App;
