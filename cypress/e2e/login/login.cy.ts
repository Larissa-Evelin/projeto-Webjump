import { LoginPage } from '../../page-objects';
import usuarios from '../../fixtures/usuarios.json';
import { IUsuario } from '../../interfaces/IUsuario';

describe('Login de Usuário', () => {
  const loginPage = new LoginPage();

  usuarios.forEach((usuario: IUsuario) =>{
    it(`Deve logar com o usuário ${usuario.nome}`, () => {
      loginPage.visitar();
      loginPage.preencherFormulario(usuario);
      loginPage.enviar();
      loginPage.validarLoginSucesso();
    });
  });

  it('Deve exibir erro ao tentar logar com senha inválida', () => {
    const usuarioInvalido = { email: usuarios[0].email, senha: 'senhaErrada' };
    loginPage.visitar();
    loginPage.preencherFormulario(usuarioInvalido);
    loginPage.enviar();
    loginPage.validarLoginFalha();
  });
});
