export class CarrinhoPage {
    visitarProduto(produtoUrl: string) {
      cy.visit(`/${produtoUrl}`);
    }

    visitarCategoria(categoriaUrl: string) {
      cy.visit(`/collections/${categoriaUrl}.html`);
    }

    buscarProduto(nomeProduto: string) {
      cy.get('#search').type(nomeProduto + '{enter}');
    }

    adicionarAoCarrinho() {
      cy.get('#product-addtocart-button', { timeout: 5000 }).click();
    }

    adicionarDaListagem(nomeProduto: string) {
      cy.contains('.product-item', nomeProduto, { timeout: 50000 }).click();
      cy.get('button[title="Add to Cart"]', { timeout: 50000 }).click({ force: true });
    }

    selecionarOpcao(nomeOpcao: string) {
      cy.get('.swatch-option')
      .filter(`[aria-label="${nomeOpcao}"]`)
      .first()
      .click({ force: true }); 
    } 

    abrirCarrinho() {
      cy.get('a.action.showcart', { timeout: 20000 })
      .click()
    }

    validarProdutoNoCarrinho(nomeProduto: string) {
      cy.get('.minicart-items').should('contain.text', nomeProduto);
    }

    validarSubtotal(valor: string) {
      cy.get('.subtotal .price').should('contain.text', valor);
    }

    finalizarCompra() {
    cy.get('button[data-role="proceed-to-checkout"]')
      .should('be.visible')
      .click();
    }

  irParaCheckout() {
    cy.get('button[data-role="proceed-to-checkout"]', { timeout: 50000 })
    .should('be.visible')
    .click();
  }

}


