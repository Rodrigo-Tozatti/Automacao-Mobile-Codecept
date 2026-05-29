Feature('CT001 - login_test');

Scenario('Cenário 01 - Preenchimento correto de e-mail e senha deve realizar login com sucesso', ({ I, loginPages }) => {
    
    loginPages

    // Validar login com sucesso
    I.waitForElement('~codigo', 10);
    I.seeElement('~codigo')
});

Scenario('Cenário 02 - Preenchimento de e-mail inexistente deve exibir mensagem de erro ', ({ I }) => {
    
    // Preencher campo e-mail
    I.waitForElement('~email', 5);
    I.tap('~email');
    I.hideDeviceKeyboard();

    // Preencher campo senha
    I.waitForElement('~senha', 5);
    I.tap('~senha');
    I.type('123456');
    I.hideDeviceKeyboard();

    // Clicar botão Entrar
    I.tap('~entrar');

    // Validar login com sucesso
    I.waitForElement('~lognFail', 10);
    I.seeElement('~lognFail')
});