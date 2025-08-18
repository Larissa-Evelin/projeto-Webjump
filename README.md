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
> **Obs:** A suíte só pode ser executada uma única vez, pois o ideal seria excluir o e-mail criado para reutilização. Como não é possível apagar o e-mail, o script cria esse e-mail e o utiliza nos demais testes. Dessa forma, a suíte não pode ser rodada novamente, a menos que o e-mail de cadastro dos usuários seja alterado no arquivo JSON

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
