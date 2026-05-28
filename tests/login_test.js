Feature('login');

Scenario('Cenário 01 - APP deve realizar login com sucesso', ({ I }) => {
    // Aguardar o campo e-mail aparecer
    I.waitForElement('~email', 30);
    
    // Preencher campo e-mail
    I.tap('~email');
    I.type('teste@teste.com');
    I.hideDeviceKeyboard();

    // Preencher campo senha
    I.waitForElement('~senha', 20);
    I.tap('~senha');
    I.type('123456');
    I.hideDeviceKeyboard();

    // Clicar botão Entrar
    I.tap('~entrar');

    // Validar login com sucesso
});