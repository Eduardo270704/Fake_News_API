import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  background-color: #1e90ff;
  padding: 1rem;
  display: flex;
  gap: 1rem;

  button {
    background: none;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default function Navegacao() {
  const navigate = useNavigate();

  return (
    <Nav>
      <button onClick={() => navigate("/")}>Classificar</button>
      <button onClick={() => navigate("/historico")}>Histórico</button>
      <button onClick={() => navigate("/status")}>Status</button>
    </Nav>
  );
}
