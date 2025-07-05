import { INoticiaClassificada, IStatusModelo } from "../../interfaces";

const API_URL = "http://localhost:8000/api";

export async function classificarNoticia(
  texto: string
): Promise<INoticiaClassificada> {
  const response = await fetch(`${API_URL}/classificar-noticia`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ texto }),
  });

  if (!response.ok) {
    throw new Error("Erro ao classificar a notícia");
  }

  const data = await response.json();
  return data;
}

export async function obterHistorico(): Promise<INoticiaClassificada[]> {
  const response = await fetch(`${API_URL}/historico`);

  if (!response.ok) {
    throw new Error("Erro ao obter o histórico");
  }

  const data = await response.json();
  return data;
}

export async function obterStatus(): Promise<IStatusModelo> {
  const response = await fetch(`${API_URL}/status`);

  if (!response.ok) {
    throw new Error("Erro ao obter o status do modelo");
  }

  const data = await response.json();
  return data;
}
