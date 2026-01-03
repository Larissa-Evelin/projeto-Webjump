import { CadastroPage } from '../../page-objects';
import { gerarEmailUnico } from '../utils/email.cy';
import { IUsuario } from '../../interfaces/IUsuario';

describe('Cadastro de Usuário', () => {
  const cadastroPage = new CadastroPage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload(true); // força reload ignorando cache do navegador
  });

  it("Deve cadastrar usuário", () => {
    cy.readFile("cypress/fixtures/usuarios.json").then((usuario: IUsuario) => {
      // Gera um email único para cada teste
      usuario.email = gerarEmailUnico();
      
      // Salva o objeto atualizado no arquivo
      cy.writeFile("cypress/fixtures/usuarios.json", usuario);

      // Intercepta o POST do cadastro
      cy.intercept('POST', '/customer/account/createpost').as('submitCadastro');

      // Preenche o formulário e envia
      cadastroPage.visitar();
      cadastroPage.preencherFormulario(usuario);
      cadastroPage.submitCadastro();

      // Valida a resposta do backend
      cy.wait('@submitCadastro').then((interception) => {
        expect(interception.response?.statusCode).to.eq(302); // Confirma redirecionamento
      });

      // Valida sucesso no frontend
      cadastroPage.validarCadastroSucesso();
    });
  });

  it('Não deve cadastrar usuário sem preencher todos os campos', () => {
    cy.intercept('POST', '/customer/account/createpost').as('submitCadastro'); // intercepta antes do submit
    cadastroPage.visitar();
    cadastroPage.submitCadastro();
    cadastroPage.ValidarMensagensDeErro();
  });
});
