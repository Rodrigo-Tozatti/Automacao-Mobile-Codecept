/// <reference path='../steps.d.ts' />
const { I } = inject();

module.exports = {
  
  campos: {
    email: '~email',
    senha: '~senha'
  },

  botoes: {
    entrar: '~entrar'
  },

  mensagens: {
    erro: '~loginFail'
  },

  //-----------------------------------------

  realizarLogin(email, senha) {
    //I.waitForElement(this.campos.email, 5);
    I.tap(this.campos.email);
    I.type(email);
    I.hideDeviceKeyboard();

    //I.waitForElement(this.campos.senha, 5);
    I.tap(this.campos.senha);
    I.type(senha);
    I.hideDeviceKeyboard();

    I.tap(this.botoes.entrar);
  }
}