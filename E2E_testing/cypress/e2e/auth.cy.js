describe("Auth Flow", () => {

  beforeEach(() => {
    localStorage.clear();

    cy.intercept("POST", "/api/login", {
      statusCode: 200,
      body: {
        token: "fake-token",
      },
    }).as("loginRequest");
  });

  it("logs in and visits dashboard", () => {
    cy.visit("/login");

    cy.get('[data-cy="email-input"]')
      .type("test@test.com");

    cy.get('[data-cy="password-input"]')
      .type("123456");

    cy.get('[data-cy="login-btn"]')
      .click();

    cy.wait("@loginRequest");

    cy.url()
      .should("include", "/dashboard");

    cy.contains("Dashboard")
      .should("be.visible");
  });

  it("protects dashboard route", () => {
    cy.visit("/dashboard");

    cy.url()
      .should("include", "/login");
  });

  it("logout works", () => {
    cy.login();

    cy.get('[data-cy="logout-btn"]')
      .click();

    cy.url()
      .should("include", "/login");
  });
});