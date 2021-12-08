///<reference types= "cypress"/>

// describe("SpeechPundit", function()
// {  
//     it("Signin should fail with wrong password", function()
//     {
//         cy.visit("https://speechpundit.com/#/signin")
//         cy.get('#email').type("sameera@applines.com")

//         cy.get('#password').type("root1234")
//         cy.get('.btn').click()
//         cy.wait(2000)
//         // Add validation check for error message



//     })
    
    
    
//     it.only("Signin works with Valid log in credentials", function()
//     {
//         cy.visit("https://speechpundit.com/#/signin")
//         cy.get('#email').type("sameera@applines.com")

//         cy.get('#password').type("root12345")
//         cy.get('.btn').click()
//         // cy.wait(1000)
//         // cy.get('[routerlink="/activity"]').click({multiple:true})
//         // // cy.get('[routerlink="/favorites"]').click() //favourites
//         // // cy.get('[routerlink="/analytics"]').click() //analytics
//         // // cy.get('.p-toast-icon-close-icon').click() //analytics close
//         // // cy.get('#menu-1').click() 
//         // // cy.get('[for="btnradio2"] > .fas').click() //grid view
//         // // cy.get(':nth-child(1) > .mb-4 > .card-body > .btn').click() //summary


//         //      cy.get('#menu-1').click() 
//         //      cy.get('[for="btnradio2"] > .fas').click() //grid view
//         //      cy.get(':nth-child(1) > .mb-4 > .card-body > .btn').click() //summary
//         //      cy.get('[routerlink="/analytics"]').click() //analytics
//         //      cy.get('.p-toast-icon-close-icon').click() //analytics close
//         //      cy.get('[routerlink="/favorites"]').click() //favourites



//     })

//     // it("Recording", function()
//     //  {
//     //      cy.visit("https://speechpundit.com/#/signin")
//     //      cy.get('#email').type("sameera@applines.com")

//     //      cy.get('#password').type("root12345")
//     //     //  cy.get('.btn').click().then(() => {
//     //     //     // Debugger is hit after the cy.visit
//     //     //     // and cy.get command have completed
//     //     //     cy.visit("https://speechpundit.com/#/record").then(() => 
//     //     //         // cy.wait(2000)
//     //     //         cy.get('.rec-btn').click({force: true})
//     //     //     )
//     //     cy.get('.btn').click()
//     //     cy.visit("https://speechpundit.com/#/record")
//     //     cy.wait(2000)
//     //     cy.get('.rec-btn').click({force: true})
//     //     cy.wait(2000)
//     //     })

// })

describe('Successful login Test', () => {
    it('verifies login succeeds with valid credentials', () => {
        //-- ACTION --//
        // cy.visit('https://www.speechpundit.com/#/')
        // cy.visit('https://speechpundit.com/#/signup')
        cy.visit("https://speechpundit.com/#/")
        cy.contains('Sign in').click()

        cy.contains('Email').type('sameera@applines.com')
        cy.contains('Password').type("root12345")
        cy.get('form').submit()
        
        //-- VALIDATION --//
        // cy.url().contains ('record')
        cy.url().should("contain", 'record')
        // cy.contains('speechpundit')

        // cy.contains('Activity')
        cy.contains('Speeches')
        // cy.contains('Admin')
        cy.contains('Activity')
        cy.contains('Record')
    })
  })

  describe('Unsuccessful login Test', () => {
    it('verifies login fails with invalid credentials', () => {
        //-- ACTION --//
        cy.visit('https://speechpundit.com/#/')
        cy.contains('Sign in').click()

        cy.contains('Email').type('sameera@applines.com')
        cy.contains('Password').type('abcde')
        cy.get('form').submit()

        //-- VALIDATION --//
        cy.contains('Not Found')
        cy.url().should("contain", 'signin')
    })
  })