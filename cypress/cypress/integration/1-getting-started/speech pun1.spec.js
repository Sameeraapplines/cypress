///<reference types= "cypress"/>

describe("SpeechPundit", function()
{
    it("visit the website", function(){
        cy.visit("https://speechpundit.com/#/")
        cy.get('[routerlink="/signup"]').click()
    })
    it("Invalid test(empty input fields) for sign up",function()
    {
        // cy.wait(2000)
        cy.get('#email').type("meee@applines.com") //email
        // cy.wait(2000)
        cy.get('#firstName').type("sameera") //firstname
        cy.get('#lastName').type("SK") //lastname
        cy.get('#password').type("hello123") //pwd  
        // cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)
    })


    it("Invalid test(existing user) for sign up",function()
    {
        // cy.wait(2000)
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


    it("Valid test for sign up",function()
    {
        cy.visit('https://speechpundit.com/#/signup')
        // cy.get('#email').should('be.enabled').type("me1e@applines.com") //email
        // cy.get('#firstName').should('be.enabled').type("sameera") //firstname
        // cy.get('#lastName').should('be.enabled').type("SK") //lastname
        cy.get('#email').type("sameera+7@applines.com") //email
        
        cy.get('#firstName').type("sameera") //firstname
        // cy.get('#lastName').type("SK") //lastname
        cy.get('#lastName').type("sheik")
        cy.get('#password').type("hello123") //pwd
        cy.get('[value="Student"]').check({ force: true })
        
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)
        // cy.get('.btn').click()
        

    })

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
        //  cy.get('[routerlink="/activity"]').click({multiple:true})
        //  cy.get('#menu-1').click()
         
        //  cy.get('.rec-btn').click({force: true})
        

    //  })
         
     it("navigation",function()
     {
            cy.visit("https://speechpundit.com/#/record")
            cy.get('#email').type("sameera@applines.com")
            cy.get('#password').type("root12345")
            cy.get('.btn').click()
            cy.get('[routerlink="/activity"]').click({multiple:true})
             cy.get('#menu-1').click()



     })
        it("profile updation",function()
        {

            cy.visit("https://speechpundit.com/#/record")
            cy.get('#email').type("sameera@applines.com")
            cy.get('#password').type("root12345")
            cy.get('.btn').click()


        })
    //  it("Recording", function()
    //  {

    //     cy.get('.rec-btn').click({force: true})


    //  })








})