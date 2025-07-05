export default interface INoticiaClassificada {
  texto: string;
  classificacao: "Fake" | "True";
  confianca: number;
  data: string;
}
