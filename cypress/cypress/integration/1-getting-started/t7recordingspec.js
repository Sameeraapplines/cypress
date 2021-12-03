it("Recording", function()
     {
         cy.visit("https://speechpundit.com/#/signin")
         cy.get('#email').type("sameera@applines.com")

         cy.get('#password').type("root12345")
        //  cy.get('.btn').click().then(() => {
        //     // Debugger is hit after the cy.visit
        //     // and cy.get command have completed
        //     cy.visit("https://speechpundit.com/#/record").then(() => 
        //         // cy.wait(2000)
        //         cy.get('.rec-btn').click({force: true})
        //     )
        cy.get('.btn').click()
        cy.visit("https://speechpundit.com/#/record")
        cy.wait(2000)
        cy.get('.rec-btn').click({force: true})
        cy.wait(2000)
        })