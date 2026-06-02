describe("Posts Pagination", () => {

  beforeEach(() => {

    cy.intercept(
      "GET",
      "/api/posts?page=2",
      {
        fixture: "postsPage2.json",
      }
    ).as("page2");
  });

  it("goes to page 2", () => {

    cy.visit("/posts");

    cy.get('[data-cy="next-page"]')
      .click();

    cy.wait("@page2");

    cy.contains("Page 2")
      .should("exist");

    cy.contains("Post 11")
      .should("exist");
  });
});