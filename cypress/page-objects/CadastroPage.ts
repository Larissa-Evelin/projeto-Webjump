import { gerarEmailUnico } from '../e2e/utils/email.cy';

export class CadastroPage {
  visitar() {
    cy.visit('/customer/account/create');
  }

  preencherFormulario(usuario: { nome: string; sobrenome?: string; senha: string; email?: string }) {
    const email = usuario.email ||gerarEmailUnico(); // gera email aleatório
    cy.get('#firstname').type(usuario.nome);
    cy.get('#lastname').type(usuario.sobrenome);
    cy.get('#email_address').type(email);
    cy.get('#password').type(usuario.senha);
    cy.get('#password-confirmation').type(usuario.senha);
  }

  enviar() {
    cy.get('button[type="submit"]').eq(1).click();
  }

  validarCadastroSucesso() {
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
  }
}
