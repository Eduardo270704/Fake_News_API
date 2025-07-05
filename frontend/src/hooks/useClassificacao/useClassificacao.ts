import { useState } from "react";
import { INoticiaClassificada } from "../../interfaces";
import { classificarNoticia } from "../../services";

export function useClassificacao() {
  const [resultado, setResultado] = useState<INoticiaClassificada | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const classificar = async (texto: string) => {
    setCarregando(true);
    setErro("");
    setResultado(null);

    try {
      const data = await classificarNoticia(texto);
      setResultado(data);
      return data;
    } catch (err) {
      setErro("Erro ao classificar a notícia.");
      return null;
    } finally {
      setCarregando(false);
    }
  };

  return {
    resultado,
    carregando,
    erro,
    classificar,
  };
}
