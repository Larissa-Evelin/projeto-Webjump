Documentação do Projeto Cypress – Automação de Testes

1. Objetivo

Este projeto tem como objetivo implementar cenários de testes automatizados utilizando Cypress e TypeScript, aplicando boas práticas de código para garantir legibilidade, manutenção e confiabilidade dos testes.

Os fluxos principais implementados são:

Cadastro de usuário
Login
Adicionar produto ao carrinho
Finalização de compra

Cenários opcionais:
Esqueci minha senha

Adicionar produto ao carrinho em fluxos alternativos:
Página de produto
Busca

Validação do pedido realizado:
Lista de pedido
Detalhe do pedido

2. Pré-requisitos

Antes de iniciar, é necessário ter instalado:

Node.js (versão 18 ou superior recomendada)
npm ou yarn
Git (para clonar o repositório)

3. Instalação do projeto

Clone o repositório ou baixe o projeto:

git clone <URL_DO_REPOSITORIO>
cd projeto-cypress


Instale as dependências:

npm install
# ou
yarn install

4. Estrutura de pastas
cypress/
 ├─ fixtures/        # Dados de teste (JSON)
 ├─ integration/     # Testes automatizados
 ├─ support/         # Comandos customizados e setup
 ├─ page-objects/    # Padrão Page Object para organização
 └─ tsconfig.json    # Configuração TypeScript

5. Execução dos testes
5.1. Abrir Cypress em modo interativo
npx cypress open


O Cypress abrirá uma interface gráfica.

Selecione o teste desejado e clique para executar.

5.2. Executar testes em modo headless (terminal)
npx cypress run


Executa todos os testes em segundo plano (sem interface gráfica).

Útil para integração contínua (CI/CD).

6. Descrição dos cenários
6.1. Fluxos principais

Cadastro de usuário

Preencher formulário com dados do usuário.

Validar sucesso do cadastro.

Login

Acessar a tela de login.

Inserir usuário e senha válidos.

Validar acesso ao sistema.

Adicionar produto ao carrinho

Selecionar produto na página inicial ou na busca.

Adicionar ao carrinho.

Validar se o produto foi adicionado.

Finalização de compra

Acessar o carrinho.

Preencher dados de pagamento e envio.

Confirmar pedido.

Validar sucesso da compra.

6.2. Cenários opcionais

Esqueci minha senha

Acessar a tela “Esqueci minha senha”.

Solicitar redefinição de senha.

Validar envio do email.

Adicionar produto ao carrinho em fluxos alternativos
2.1. Página de produto

Acessar a página do produto.

Adicionar ao carrinho.
2.2. Busca

Buscar produto usando a barra de pesquisa.

Adicionar produto encontrado ao carrinho.

Validação do pedido realizado
3.1. Lista de pedido

Verificar se o pedido aparece na lista de pedidos do usuário.
3.2. Detalhe do pedido

Acessar detalhes do pedido e validar informações.

7. Boas práticas adotadas

Page Object Pattern: separação da lógica de interação da interface dos testes.

Fixtures: uso de arquivos JSON para dados de teste, evitando repetição.

Comandos customizados: funções reutilizáveis no cypress/support/commands.ts.

Intercepts: utilização de cy.intercept() para controlar e validar requisições de API.

Organização dos testes: cada fluxo possui arquivo próprio e bem nomeado.