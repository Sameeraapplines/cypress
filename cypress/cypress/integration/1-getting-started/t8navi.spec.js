it("navigation",function()
     {
            cy.visit("https://speechpundit.com/#/record")
            cy.get('#email').type("sameera@applines.com")
            cy.get('#password').type("root12345")
            cy.get('.btn').click()
            cy.get('[routerlink="/activity"]').click({multiple:true})
             cy.get('#menu-1').click()



     })