Cypress.Commands.add("login", () => {
  cy.intercept("POST", "/api/login", {
    statusCode: 200,
    body: {
      token: "fake-token",
    },
  }).as("loginRequest");

  cy.visit("/login");

  cy.get('[data-cy="email-input"]')
    .type("test@test.com");

  cy.get('[data-cy="password-input"]')
    .type("123456");

  cy.get('[data-cy="login-btn"]')
    .click();

  cy.wait("@loginRequest");
});