export interface CreateGroupDto {
  nome: string;
  descricao: string;
  cidadeOrigem: string;
  cidadeDestino: string;
  dataCadastro?: Date;
}
