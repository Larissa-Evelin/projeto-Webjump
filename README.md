#  Documentação do Projeto Cypress – Automação de Testes

##  Objetivo
Este projeto foi desenvolvido para criar e executar **cenários de testes automatizados** utilizando **Cypress** e **TypeScript**, seguindo **boas práticas de código** para manter os testes **claros, organizados e confiáveis**.

Os principais fluxos automatizados são:

-  **Cadastro de usuário**
-  **Login**
-  **Adicionar produto ao carrinho**
-  **Finalização de compra**

Cenários extras:

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
3. **Git** (para clonar o repositório e enviar alterações para o repositório remoto)
> **Obs:** Caso seja executado apenas o teste de finalizar compra pela segunda vez, sem passar por todo o fluxo completo, ocorrerá erro.
Isso acontece porque não foi criada uma lógica para tratar a situação em que o endereço já está cadastrado utilizando o mesmo e-mail de lpgin.
O ideal seria remover todos os dados previamente para que o teste pudesse ser reutilizado posteriormente.
Como essa lógica ainda não foi implementada, o teste de finalizar compra, quando executado isoladamente pela segunda vez, acaba falhando.

> **Dica:** Para verificar se você já tem o Node e o npm instalados:

##  Digite no terminal cmd (Prompt de Comando) para verificar versões instaladas

node -v
npm -v

##  Instalando Node.js e npm via terminal (Linux / Mac) caso não tenha instalado

1. Atualize os pacotes:
- **Digite no terminal cmd (Prompt de Comando)**
sudo apt update        # Para Debian/Ubuntu
sudo yum update        # Para CentOS/Fedora

2. Instale o Node.js e npm:
sudo apt install nodejs npm        # Debian/Ubuntu
sudo yum install nodejs npm        # CentOS/Fedora

3. Verifique a instalação:
node -v
npm -v

Se aparecer a versão, está tudo certo.

4. No **Windows**, a instalação ainda precisa ser pelo **Site oficial**, 

> **Link download nodejs:** https://www.nodejs.tech/pt-br/download

> **Link download npm:** https://www.npmjs.com/package/download

# Instalação do Projeto

1. Abrir o terminal no local onde deseja salvar o projeto.

2. Clonar o repositório, digite no terminal:
git clone git@github.com:Larissa-Evelin/projeto-Webjump.git

3. Entrar na pasta do projeto:
cd projeto-cypress

4. Instalar as dependências:
npm install

> **Execução dos Testes**

1. Abrir Cypress com interface gráfica:
npx cypress open


> **Abre uma janela gráfica do Cypress**

1. Selecione o navegador Chrome.

2. Escolha o teste e clique para executar.

>  **Rodar testes no terminal (modo headless)**

npx cypress run

> **Executa os testes diretamente no terminal**

Usa o Chrome por padrão: npx cypress run --browser chrome

### Cenários de Teste

Fluxos principais

🔹 Cadastro de usuário

Preencher formulário com os dados do usuário.

Validar sucesso do cadastro.

🔹Login

Acessar a tela de login.

Inserir usuário e senha válidos.

Validar acesso ao sistema.

Inserir usuário e senha inválidos

Validar a exibição da mensagem de erro

🔹 Adicionar produto ao carrinho

Selecionar produto na página inicial ou pela busca

Buscar produto na barra de pesquisa

Adicionar ao carrinho

Adicionar ao carrinho com seleção de tamanho e cor

Validar se o produto foi adicionado

Listagem de produtos

🔹Finalização de compra

Adicionar ao carrinho

Preencher dados de pagamento e envio

Confirmar pedido

Validação do pedido realizado

