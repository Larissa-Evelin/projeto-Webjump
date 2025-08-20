import { gerarEmailUnico } from '../e2e/utils/email.cy';
import { IUsuario } from '../interfaces/IUsuario';

export class CadastroPage {
  visitar() {
    cy.visit('/customer/account/create');
  }

  preencherFormulario(usuario: IUsuario) {
  cy.get('#firstname').type(usuario.nome);
  cy.get('#lastname').type(usuario.sobrenome || "");
  cy.get('#email_address').type(usuario.email);
  cy.get('#password').type(usuario.senha);
  cy.get('#password-confirmation').type(usuario.senha);
  }

  submitCadastro() {
    cy.get('button[type="submit"]').eq(1).click();
  }

  validarCadastroSucesso() {
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    cy.contains('Thank you for registering').should('be.visible');
    cy.get('span[data-ui-id="page-title-wrapper"]', { timeout: 20000 })
    .should('be.visible')
    .and('contain.text', 'My Account');
    cy.contains('Sasuke Uchiha').should('be.visible'); // se o nome estiver vindo do fixture
    cy.contains('teste+').should('be.visible'); // valida o email gerado
  }

  ValidarMensagensDeErro(){   
    cy.get('div[data-bind*="prepareMessageForHtml"]', { timeout: 15000 })
    .should('contain.text', 'The password needs at least 8 characters. Create a new password and try again.');
  }
}
