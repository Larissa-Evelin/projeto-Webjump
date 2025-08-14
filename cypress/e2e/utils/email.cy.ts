export function gerarEmailUnico(): string {
  const timestamp = Date.now(); // pega o horário atual em milissegundos
  return `teste+${timestamp}@exemplo.com`; // cria email único
}
