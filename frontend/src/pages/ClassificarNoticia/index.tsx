import { useState } from "react";
import styled from "styled-components";
import { INoticiaClassificada } from "../../interfaces";
import { classificarNoticia } from "../../services";
import { Container, Header } from "../../components";
import { useHistorico } from "../../contexts";
import { useClassificacao } from "../../hooks";

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #1e90ff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1c86ee;
  }
`;

const Resultado = styled.div`
  margin-top: 2rem;
  background-color: #f0f8ff;
  border-left: 5px solid #1e90ff;
  padding: 1rem;
  border-radius: 5px;
`;

export default function ClassificarNoticia() {
  const { resultado, carregando, erro, classificar } = useClassificacao();
  const { adicionarClassificacao } = useHistorico();
  const [texto, setTexto] = useState("");

  const handleClassificar = async () => {
    const resposta = await classificar(texto);
    if (resposta) {
      adicionarClassificacao(resposta);
    }
  };

  return (
    <Container>
      <Header>
        <h1>Detector de Fake News</h1>
      </Header>
      <TextArea
        placeholder="Digite aqui a notícia para classificar..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <Button onClick={handleClassificar} disabled={carregando}>
        {carregando ? "Classificando..." : "Classificar"}
      </Button>
      {erro && <p style={{ color: "red", marginTop: "1rem" }}>{erro}</p>}
      {resultado && (
        <Resultado>
          <p>
            <strong>Classificação:</strong> {resultado.classificacao}
          </p>
          <p>
            <strong>Confiança:</strong> {resultado.confianca.toFixed(2)}%
          </p>
          <p>
            <strong>Data:</strong> {new Date(resultado.data).toLocaleString()}
          </p>
        </Resultado>
      )}
    </Container>
  );
}
