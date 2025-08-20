import { CarrinhoPage } from '../../page-objects';
import { LoginPage } from '../../page-objects';
import usuarios from '../../fixtures/usuarios.json';
import { produtos as produtosJson } from '../../fixtures/produtos.json';
import { IProduto } from '../../interfaces/IProduto';
import { IUsuario } from '../../interfaces/IUsuario';

const carrinhoPage = new CarrinhoPage();
const loginPage = new LoginPage();
const usuario = usuarios[0];

const produtos: IProduto[] = produtosJson;

describe('Fluxo de adicionar ao carrinho', () => {

 beforeEach(() => {
    const usuario: IUsuario = usuarios; 
    loginPage.visitar();
    loginPage.preencherFormulario(usuario);
    loginPage.enviar();
    loginPage.validarLoginSucesso();
  });

  it('Adicionar ao carrinho', () => {
    const produto: IProduto = produtos[0];
    carrinhoPage.visitarProduto(produto.url);
    carrinhoPage.adicionarAoCarrinho();
    carrinhoPage.abrirCarrinho();
    carrinhoPage.validarProdutoNoCarrinho(produto.nome);
  });

  it('Listagem de produtos', () => {
    const produto: IProduto = produtos[2];
    carrinhoPage.visitarCategoria('yoga-new');
    carrinhoPage.adicionarDaListagem(produto.nome);
    carrinhoPage.abrirCarrinho();
    carrinhoPage.validarProdutoNoCarrinho(produto.nome);
  });

  it('Busca de produto', () => {
    const produto: IProduto = produtos[2];
    carrinhoPage.buscarProduto(produto.nome);
    carrinhoPage.adicionarDaListagem(produto.nome);
    carrinhoPage.abrirCarrinho();
    carrinhoPage.validarProdutoNoCarrinho(produto.nome);
  });

  it('Adicionar ao carrinho com seleção de tamanho e cor', () => {
    const produto: IProduto = produtos[3];
    carrinhoPage.visitarProduto(produto.url);
    carrinhoPage.selecionarOpcao(produto.opcoes.tamanho[0]);
    carrinhoPage.selecionarOpcao(produto.opcoes.cor[0]);
    carrinhoPage.adicionarAoCarrinho();
    carrinhoPage.abrirCarrinho();
    carrinhoPage.validarProdutoNoCarrinho(produto.nome); 
  });

});
