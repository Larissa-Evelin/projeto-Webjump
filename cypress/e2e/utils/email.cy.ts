export function gerarEmailUnico(): string {
  const timestamp = Date.now(); 
  return `teste+${timestamp}@exemplo.com`; 
}
