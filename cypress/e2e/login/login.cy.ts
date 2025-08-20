import { LoginPage } from '../../page-objects';
import usuario from '../../fixtures/usuarios.json';

describe('Login de Usuário', () => {
  const loginPage = new LoginPage();

  it(`Deve logar com o usuário ${usuario.nome}`, () => {
    loginPage.visitar();
    loginPage.preencherFormulario(usuario);
    loginPage.enviar();
    loginPage.validarLoginSucesso();
  });

  it('Deve exibir erro ao tentar logar com senha inválida', () => {
    const usuarioInvalido = { email: usuario.email, senha: 'senhaErrada' };
    loginPage.visitar();
    loginPage.preencherFormulario(usuarioInvalido);
    loginPage.enviar();
    loginPage.validarLoginFalha();
  });
});
