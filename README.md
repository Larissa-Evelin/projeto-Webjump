#  Documentação do Projeto Cypress – Automação de Testes

##  Objetivo
Este projeto foi desenvolvido para criar e executar **cenários de testes automatizados** utilizando **Cypress** e **TypeScript**, seguindo **boas práticas de código** para manter os testes **claros, organizados e confiáveis**.

##  Pré-requisitos
Antes de rodar o projeto, é necessário ter instalado no computador:

1. **Node.js** (versão 18 ou superior recomendada)
2. **npm** (vem junto com o Node) ou **yarn**
3. **Git** (para clonar o repositório e enviar alterações para o repositório remoto)

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

# Instalação do projeto

1. Abrir o terminal no local onde deseja salvar o projeto

2. Clonar o repositório, digite no terminal:
git clone git@github.com:Larissa-Evelin/projeto-Webjump.git

3. Entrar na pasta do projeto:
cd projeto-Webjump

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

## Eventos de CI/CD

Sempre que o projeto é modificado e enviado com git push, o recurso do GitHub chamado Actions dispara automaticamente um job, executando a suíte de testes na pipeline.
Para acompanhar, siga os passos abaixo:

1. Abra o VSCode dentro do diretório do projeto

2. Faça uma alteração simples no código (ex.: adicionar um espaço ou comentário)

3. No terminal do VSCode, dentro da pasta do projeto, execute: git add .

4. Em seguida, faça o commit: git commit -m "Teste projeto" 

5. Agora envie para o repositório remoto: git push 

> **Acesse a aba Actions no GitHub para acompanhar a execução da pipeline e o resultado da suíte de testes.**

> **Obs:** Para que outro usuário possa modificar o projeto e visualizar a pipeline sendo executada, é necessário adicioná-lo como colaborador no meu repositório do GitHub. Dessa forma, ele terá permissão de escrita (write) e poderá realizar alterações e enviar (push) diretamente para o repositório.

## Cenários automatizados

🔹 Cadastro de usuário

Preencher formulário com os dados do usuário

Validar sucesso do cadastro

Tentar cadastrar um usuário sem preencher todos os campos do formulário

Validar a mensagen de erro exibida

🔹Login

Acessar a tela de login

Inserir usuário e senha válidos

Validar acesso ao sistema

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
 
> **Obs:** Na pasta doc no path: cypress/doc encontram-se os steps em BDD. Optei por utilizar esse recurso apenas como documentação; não há nenhum vínculo com o Cypress, servindo apenas para registro e referência dos testes.