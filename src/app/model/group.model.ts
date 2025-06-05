export interface Group {
  id: string;
  nome: string;
  descricao: string;
  cidadeOrigem: string;
  cidadeDestino: string;
  dataCadastro?: Date;
  status?: boolean;
}
