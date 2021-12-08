it("profile updation",function()
{

    cy.visit("https://speechpundit.com/#/record")
    cy.get('#email').type("sameera@applines.com")
    cy.get('#password').type("root12345")
    cy.get('.btn').click()
    cy.get('#menu-2').click()
    // cy.get('.fas fa-user').click()
    // cy.get('.dropdown menu').click()
    // cy.get('.dropdown-item').click({multiple:true})
    // cy.get('.dropdown-item').and({force:true}).and({multiple:true})
    // cy.get('.dropdown-item').should({force:true}).should({multiple:true})



})