import { CarrinhoPage, CheckoutPage, LoginPage } from '../../page-objects';
import endereco from '../../fixtures/endereco.json';
import { IEndereco } from '../../interfaces/IEndereco';
import usuarios from '../../fixtures/usuarios.json';
import { IUsuario } from '../../interfaces/IUsuario';
import { produtos as produtosJson } from '../../fixtures/produtos.json';
import { IProduto } from '../../interfaces/IProduto';

describe('Fluxo de compra', () => {
  const carrinhoPage = new CarrinhoPage();
  const checkoutPage = new CheckoutPage();
  const loginPage = new LoginPage();

  beforeEach(() => {
    const usuario: IUsuario = usuarios; 
    loginPage.visitar();
    loginPage.preencherFormulario(usuario);
    loginPage.enviar();
  });

  it('Adicionar ao carrinho', () => {
    const produto: IProduto = produtosJson[0];
    carrinhoPage.visitarProduto(produto.url);
    cy.wait(8000);
    carrinhoPage.adicionarAoCarrinho();
  });

  it('Deve finalizar a compra com sucesso', () => {
    const dadosEndereco: IEndereco = endereco; 
    carrinhoPage.abrirCarrinho();
    cy.wait(5000);
    carrinhoPage.irParaCheckout();
    cy.wait(5000);
    checkoutPage.clicarNext();
    checkoutPage.preencherEndereco(dadosEndereco);
    cy.wait(5000);
    checkoutPage.clicarNext();
    checkoutPage.selecionarPagamento('checkmo');
    checkoutPage.confirmarPedido();
    checkoutPage.validarPedidoSucesso();
  });
});
