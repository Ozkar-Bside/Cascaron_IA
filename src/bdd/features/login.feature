Feature: Validación de Login en The Internet

  Scenario: Login con credenciales válidas
    Given el usuario se encuentra en la página de login
    When ingresa el usuario "tomsmith" y la contraseña "SuperSecretPassword!"
    Then se muestra el mensaje "You logged into a secure area!"

  Scenario: Login con credenciales inválidas
    Given el usuario se encuentra en la página de login
    When ingresa el usuario "tomsmith" y la contraseña "ClaveErronea"
    Then se muestra el mensaje "Your password is invalid!"
