import { CadastroPage } from '../../page-objects';
import  usuarios from '../../fixtures/usuarios.json';
import { IUsuario } from '../../interfaces/IUsuario';

describe('Cadastro de Usuário', () => {

  const cadastroPage = new CadastroPage();
  
  usuarios.forEach((usuario: IUsuario) => {
    it(`Deve cadastrar o usuário ${usuario.nome}`, () => {
      cadastroPage.visitar();
      cadastroPage.preencherFormulario(usuario);
      cadastroPage.enviar();
      cadastroPage.validarCadastroSucesso();
    });
  });
});

