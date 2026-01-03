import { gerarEmailUnico } from '../e2e/utils/email.cy';
import type { IUsuario } from '../interfaces/IUsuario';

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

  ValidarMensagensDeErro() {
    const verificar = (): void => {  // indica explicitamente que a função não retorna nada
      cy.get('div[data-bind*="prepareMessageForHtml"]', { timeout: 15000 })
        .then(($el) => {
          const texto = $el.text();
          if (texto.includes('The password needs at least 8 characters. Create a new password and try again')) {
            cy.log('Erro de senha curta detectado');
            cy.wrap($el).should('be.visible');
          } else if (texto.includes('Invalid Form Key. Please refresh the page.')) {
            cy.log('Erro de Form Key detectado, atualizando a página...');
            cy.reload(true).then(() => {
              verificar(); // chama a função de novo após recarregar
            });
          }
        });
    };

    verificar(); // chama a função de verificação
  }
}
