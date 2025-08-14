import { IEndereco } from '../interfaces/IEndereco';

export class CheckoutPage {

preencherEndereco(dados: IEndereco) {
  cy.get('input[name="firstname"]').clear();
  cy.get('input[name="firstname"]').type(dados.nome);
  cy.get('input[name="lastname"]').clear();
  cy.get('input[name="lastname"]').type(dados.sobrenome);
  cy.get('input[name="company"]').type(dados.company); 
  cy.get('input[name="street[0]"]').type(dados.email);
  cy.get('select[name="country_id"]').select(dados.country);  
  cy.get('select[name="region_id"]').select(dados.State);
  cy.get('input[name="city"]').type(dados.city);
  cy.get('input[name="postcode"]').type(dados.postalCode);
  cy.get('input[name="telephone"]').type(dados.telefone);
}

  clicarNext() {
    cy.contains('span', 'Next', { timeout: 10000 }).click({ force: true });
  }


  selecionarPagamento(metodo: string) {
    cy.get(`input[value="${metodo}"]`).check({ force: true });
  }

  confirmarPedido() {
    cy.get('button[title="Place Order"]').click();
  }

  validarPedidoSucesso() {
    cy.get('.checkout-success').should('be.visible');
    cy.get('.order-number').should('exist');
  }
}
