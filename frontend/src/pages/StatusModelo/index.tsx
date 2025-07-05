import { useEffect, useState } from "react";
import styled from "styled-components";
import { IStatusModelo } from "../../interfaces";
import { obterStatus } from "../../services";
import { Container, Header } from "../../components";

const Card = styled.div`
  background-color: #ffffff;
  border-left: 5px solid #1e90ff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export default function StatusModelo() {
  const [status, setStatus] = useState<IStatusModelo | null>(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const carregarStatus = async () => {
      try {
        const dados = await obterStatus();
        setStatus(dados);
      } catch (e) {
        setErro("Erro ao obter status do modelo.");
      }
    };

    carregarStatus();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Status do Modelo</h1>
      </Header>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {status && (
        <Card>
          <p>
            <strong>Modelo:</strong> {status.modelo}
          </p>
          <p>
            <strong>Embeddings:</strong> {status.embeddings}
          </p>
          <p>
            <strong>Versão:</strong> {status.versao}
          </p>
        </Card>
      )}
    </Container>
  );
}
