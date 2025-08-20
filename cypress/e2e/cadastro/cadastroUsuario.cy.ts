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
      usuario.email = gerarEmailUnico(); // altera apenas o email e gera um email aleatório
      const usuarioParaCadastro = { ...usuario, email: gerarEmailUnico() };
      cy.writeFile("cypress/fixtures/usuarios.json", usuario); // salva o objeto completo de volta

      cy.intercept('POST', '/customer/account/createpost').as('submitCadastro');

      cadastroPage.visitar();
      cadastroPage.preencherFormulario(usuario);
      cadastroPage.submitCadastro();

      cy.wait('@submitCadastro').then((interception) => {
        expect(interception.response?.statusCode).to.eq(302); // Confirma que houve redirecionamento
      });

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
