export interface Usuario {
  id: string;
  documento: string;
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  telefone: string;
  status?: boolean;
  dataCadatro?: Date;
  perfilId: string;
  carteiraDeMotorista?: string;
}
