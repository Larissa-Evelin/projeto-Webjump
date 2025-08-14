#  Documentação do Projeto Cypress – Automação de Testes

##  Objetivo
Este projeto foi desenvolvido para criar e executar **cenários de testes automatizados** utilizando **Cypress** e **TypeScript**, seguindo **boas práticas de código** para manter os testes **claros, organizados e confiáveis**.

Os principais fluxos automatizados são:

-  **Cadastro de usuário**
-  **Login**
-  **Adicionar produto ao carrinho**
-  **Finalização de compra**

Cenários extras:

-  **Esqueci minha senha**
-  **Adicionar produto ao carrinho por outros caminhos:**
  - Pela **página do produto**
  - Pela **busca**
-  **Validação de pedido realizado:**
  - Pela **lista de pedidos**
  - Pelo **detalhe do pedido**

---

##  Pré-requisitos
Antes de rodar o projeto, é necessário ter instalado no computador:

1. **Node.js** (versão 18 ou superior recomendada)
2. **npm** (vem junto com o Node) ou **yarn**
3. **Git** (para clonar o repositório)

> **Dica:** Para verificar se você já tem o Node e o npm instalados:
```bash
node -v
npm -v
 Instalação do Projeto
Abrir o terminal no local onde deseja salvar o projeto.

Clonar o repositório:

bash
Copiar
Editar
git clone git@github.com:Larissa-Evelin/projeto-Webjump.git
Entrar na pasta do projeto:

bash
Copiar
Editar
cd projeto-cypress
Instalar as dependências:

bash
Copiar
Editar
npm install
ou, se preferir usar yarn:

bash
Copiar
Editar
yarn install
 Execução dos Testes
 Abrir Cypress com interface gráfica
bash
Copiar
Editar
npx cypress open
Abre uma janela gráfica do Cypress.

Selecione o navegador Chrome.

Escolha o teste e clique para executar.

 Rodar testes no terminal (modo headless)
bash
Copiar
Editar
npx cypress run
Executa os testes diretamente no terminal.

Usa o Chrome por padrão.

Gera relatório com o resultado dos testes.

 Cenários de Teste
🔹 Fluxos principais
Cadastro de usuário

Preencher formulário com os dados do usuário.

Validar sucesso do cadastro.

Login

Acessar a tela de login.

Inserir usuário e senha válidos.

Validar acesso ao sistema.

Adicionar produto ao carrinho

Selecionar produto na página inicial ou pela busca.

Adicionar ao carrinho.

Validar se o produto foi adicionado.

Finalização de compra

Acessar o carrinho.

Preencher dados de pagamento e envio.

Confirmar pedido.

Validar sucesso da compra.

🔹 Cenários opcionais
Esqueci minha senha

Acessar a tela “Esqueci minha senha”.

Solicitar redefinição de senha.

Validar envio do e-mail.

Adicionar produto ao carrinho por fluxos alternativos

Página de produto: acessar página do produto → adicionar ao carrinho.

Busca: buscar produto na barra de pesquisa → adicionar ao carrinho.

Validação do pedido realizado

Lista de pedidos: verificar se o pedido aparece na lista.

Detalhe do pedido: acessar detalhes do pedido e validar informações.