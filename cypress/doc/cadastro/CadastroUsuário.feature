Feature: Cadastro de Usuário

  Scenario: Cadastro válido
    Given que o usuário acessa o formulário de cadastro
    When preenche todos os campos obrigatórios
    E clicar em submit
    Then o cadastro é realizado com sucesso

  Scenario: Cadastro inválido
    Given que o usuário acessa o formulário de cadastro
    When clicar em submit
    Then deve exibir mensagem de erro
