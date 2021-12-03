///<reference types= "cypress"/>

describe("SpeechPundit", function()
{
    it("visit the website", function(){
        cy.visit("https://speechpundit.com/#/")
        cy.get('[routerlink="/signup"]').click()
    })

    it("Invalid test(existing user) for sign up",function()
    {
        // cy.wait(2000)
        // cy.get('[routerlink="/signup"]').click()
        cy.get('#email').type("sameera@applines.com") //email
        // cy.wait(2000)
        cy.get('#firstName').type("sameera") //firstname
        cy.get('#lastName').type("SK") //lastname
        cy.get('#password').type("hello123") //pwd  
        cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)
    })

})