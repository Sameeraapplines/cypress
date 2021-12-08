///<reference types= "cypress"/>

describe("SpeechPundit", function()
{
    it("visit the website", function(){
        cy.visit("https://speechpundit.com/#/")
        cy.get('[routerlink="/signup"]').click()
    })
    it("Valid test for sign up",function()
    {
        cy.visit('https://speechpundit.com/#/signup')
        // cy.get('#email').should('be.enabled').type("me1e@applines.com") //email
        // cy.get('#firstName').should('be.enabled').type("sameera") //firstname
        // cy.get('#lastName').should('be.enabled').type("SK") //lastname
        cy.get('#email').type("sameera+44@applines.com") //email
        
        cy.get('#firstName').type("sameera") //firstname
        // cy.get('#lastName').type("SK") //lastname
        cy.get('#lastName').type("sheik")
        cy.get('#password').type("hello123") //pwd
        cy.get('[value="Student"]').check({ force: true })
        
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()

    })





})