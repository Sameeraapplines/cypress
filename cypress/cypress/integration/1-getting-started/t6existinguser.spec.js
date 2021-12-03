it("existing user log in", function()
{
    cy.visit("https://speechpundit.com/#/signin")
    cy.get('#email').type("sameera@applines.com")

    cy.get('#password').type("root12345")
    cy.get('.btn').click()
    cy.wait(1000)



})