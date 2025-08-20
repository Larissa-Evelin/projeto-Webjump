Feature: Login

  Scenario: Login válido
    Given que estou na tela de login
    When informo um email válido
    And informo a senha correta
    And clico no botão "Submit"
    Then devo acessar o sistema com sucesso

  Scenario: Login inválido
    Given que estou na tela de login
    When informo um email válido
    And informo uma senha incorreta
    And clico no botão "Submit"
    Then devo ver a mensagem de erro informando credenciais inválidas
