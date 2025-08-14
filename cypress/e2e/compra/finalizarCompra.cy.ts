/// <reference types="cypress" />

import { CarrinhoPage } from '../../page-objects/CarrinhoPage';
import { CheckoutPage } from '../../page-objects/CheckoutPage';
import endereco from '../../fixtures/endereco.json';
import { IEndereco } from '../../interfaces/IEndereco';
import { LoginPage } from '../../page-objects';
import usuarios from '../../fixtures/usuarios.json';
import { IUsuario } from '../../interfaces/IUsuario';
import { produtos as produtosJson } from '../../fixtures/produtos.json';
import { IProduto } from '../../interfaces/IProduto';

describe('Fluxo de compra', () => {
  const carrinhoPage = new CarrinhoPage();
  const checkoutPage = new CheckoutPage();
  const loginPage = new LoginPage();

 beforeEach(() => {
    const usuario: IUsuario = usuarios[0]; 
    loginPage.visitar();
    loginPage.preencherFormulario(usuario);
    loginPage.enviar();
    loginPage.validarLoginSucesso();
  });

  it('Adicionar ao carrinho', () => {
    const produto: IProduto = produtosJson[0];
    carrinhoPage.visitarProduto(produto.url);
    carrinhoPage.adicionarAoCarrinho();
  });

  it('Deve finalizar a compra com sucesso', () => {
    const dadosEndereco: IEndereco = endereco;
    carrinhoPage.abrirCarrinho();
    carrinhoPage.irParaCheckout();
    cy.wait(5000);
    carrinhoPage.irParaCheckout();
    checkoutPage.preencherEndereco(dadosEndereco);
    checkoutPage.clicarNext();
    cy.wait(5000);
    checkoutPage.clicarNext();
    checkoutPage.selecionarPagamento('checkmo');
    checkoutPage.confirmarPedido();
    checkoutPage.validarPedidoSucesso();
  });
});
