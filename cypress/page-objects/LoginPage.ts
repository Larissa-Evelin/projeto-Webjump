export class LoginPage {
  visitar() {
    cy.visit('/customer/account/login');
  }

  preencherFormulario(usuario: { email: string; senha: string }) {
    cy.get('#email').type(usuario.email);
    cy.get('#pass').type(usuario.senha);
  }

  enviar() {
    cy.wait(1000);
    cy.get('button[type="submit"]').eq(1).click();
  }

validarLoginSucesso() {
  cy.get('#maincontent > div.columns > div.column.main > div.page-title-wrapper > h1 > span', { timeout: 10000 })
    .should('be.visible')
    .and('have.text', 'My Account');
}

    validarLoginFalha() {
      cy.get('div[data-bind^="html: $parent.prepareMessageForHtml"]')
      .should('be.visible')
      .and('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');

    }
}
