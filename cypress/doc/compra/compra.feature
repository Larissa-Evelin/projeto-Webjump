Feature: Finalização de Compra

  Scenario: Finalizar uma compra
    Given que tenho um produto adicionado ao carrinho
    When clico em "Ir para checkout"
    And preencho o endereço de entrega
    And clico em "Next"
    And informo os dados de pagamento
    And clico no botão "Place Order"
    Then a compra deve ser finalizada com sucesso
