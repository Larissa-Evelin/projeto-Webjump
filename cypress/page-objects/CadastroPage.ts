import type { IUsuario } from '../interfaces/IUsuario';

export class CadastroPage {
  visitar(): void {
    cy.visit('/customer/account/create');
  }

  preencherFormulario(usuario: IUsuario): void {
    cy.get('#firstname').type(usuario.nome);
    cy.get('#lastname').type(usuario.sobrenome || "");
    cy.get('#email_address').type(usuario.email);
    cy.get('#password').type(usuario.senha);
    cy.get('#password-confirmation').type(usuario.senha);
  }

  submitCadastro(): void {
    cy.get('button[type="submit"]').eq(1).click();
  }

  validarCadastroSucesso(): void {
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
    cy.contains('Thank you for registering').should('be.visible');
    cy.get('span[data-ui-id="page-title-wrapper"]', { timeout: 20000 })
      .should('be.visible')
      .and('contain.text', 'My Account');
    cy.contains('Sasuke Uchiha').should('be.visible'); // do fixture
    cy.contains('teste+').should('be.visible'); // valida email gerado
  }

  ValidarMensagensDeErro(): void {
    const verificar = (): void => {
      cy.get('div[data-bind*="prepareMessageForHtml"]', { timeout: 15000 })
        .then(($el) => {
          const texto = $el.text();

          if (texto.includes('The password needs at least 8 characters. Create a new password and try again')) {
            cy.log('Erro de senha curta detectado');
            cy.wrap($el).should('be.visible'); // encadeia o Cypress sem retornar
          } else if (texto.includes('Invalid Form Key. Please refresh the page.')) {
            cy.log('Erro de Form Key detectado, atualizando a página...');
            // recursão feita dentro de um .then, mas sem return para evitar alerta do Qodana
            cy.reload(true).then(() => {
              verificar(); 
            });
          }
        });
    };

    // Chama a função de verificação
    verificar();
  }
}
