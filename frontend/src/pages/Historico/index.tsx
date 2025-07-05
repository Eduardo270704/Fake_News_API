import { useEffect, useState } from "react";
import styled from "styled-components";
import { INoticiaClassificada } from "../../interfaces";
import { obterHistorico } from "../../services";
import { Container, Header } from "../../components";
import { useHistorico } from "../../contexts";

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background-color: #fff;
  border-left: 5px solid #1e90ff;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export default function Historico() {
  const { historico } = useHistorico();
  const [erro, setErro] = useState("");

  return (
    <Container>
      <Header>
        <h1>Histórico de Classificações</h1>
      </Header>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <Lista>
        {historico.map((item, index) => (
          <Item key={index}>
            <p>
              <strong>Texto:</strong> {item.texto}
            </p>
            <p>
              <strong>Classificação:</strong> {item.classificacao}
            </p>
            <p>
              <strong>Confiança:</strong> {item.confianca.toFixed(2)}%
            </p>
            <p>
              <strong>Data:</strong> {new Date(item.data).toLocaleString()}
            </p>
          </Item>
        ))}
      </Lista>
    </Container>
  );
}
