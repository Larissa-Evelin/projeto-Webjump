Feature: Carrinho de Compras

  Scenario: Adicionar produto ao carrinho
    Given que estou na página de um produto
    When clicar no botão "Adicionar ao carrinho"
    Then o produto deve ser adicionado ao carrinho

  Scenario: Listagem de produtos
    Given que estou na categoria de produtos "yoga-new"
    When clicar em "Adicionar ao carrinho" em um produto da categoria
    And abrir o carrinho
    Then o produto deve estar no carrinho

  Scenario: Busca de produto
    Given que estou na página de produtos 
    When informar o nome do produto no campo de busca
    And pressionar a tecla Enter
    And adicionar o produto ao carrinho
    Then o produto deve ser adicionado ao carrinho

  Scenario: Adicionar ao carrinho com seleção de tamanho e cor
    Given que estou na página de produtos 
    When clicar em um produto
    And selecionar o tamanho desejado
    And selecionar a cor desejada
    And clicar em "Adicionar ao carrinho"
    Then o produto deve ser adicionado ao carrinho
