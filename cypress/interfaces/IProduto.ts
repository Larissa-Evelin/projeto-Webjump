export interface IProduto {
  nome: string;
  url: string;
  preco: string;
  opcoes?: {
    tamanho?: string[];
    cor?: string[];
  };
}
