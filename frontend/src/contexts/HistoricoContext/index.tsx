import { createContext, useContext, useEffect, useState } from "react";
import { INoticiaClassificada } from "../../interfaces";
import { obterHistorico } from "../../services";

interface HistoricoContextType {
  historico: INoticiaClassificada[];
  atualizarHistorico: () => Promise<void>;
  adicionarClassificacao: (nova: INoticiaClassificada) => void;
}

const HistoricoContext = createContext<HistoricoContextType | undefined>(
  undefined
);

export const HistoricoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [historico, setHistorico] = useState<INoticiaClassificada[]>([]);

  const atualizarHistorico = async () => {
    try {
      const dados = await obterHistorico();
      setHistorico(dados.reverse()); // mais recentes primeiro
    } catch (error) {
      console.error("Erro ao atualizar histórico", error);
    }
  };

  const adicionarClassificacao = (nova: INoticiaClassificada) => {
    setHistorico((prev) => [nova, ...prev]);
  };

  useEffect(() => {
    atualizarHistorico();
  }, []);

  return (
    <HistoricoContext.Provider
      value={{ historico, atualizarHistorico, adicionarClassificacao }}
    >
      {children}
    </HistoricoContext.Provider>
  );
};

export const useHistorico = () => {
  const context = useContext(HistoricoContext);
  if (!context) {
    throw new Error("useHistorico deve ser usado dentro de HistoricoProvider");
  }
  return context;
};
