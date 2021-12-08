///<reference types= "cypress"/>

// describe("Forgot password", function()
// {
//     it.only("Forgot password functionality", function(){
//         // cy.visit("https://speechpundit.com/#/")
//         cy.visit("https://www.speechpundit.com/#/signin") //visits signin page
//         // cy.get(':nth-child(7) > .font-14 > a').click() // clicks forgot pwd button
//         cy.contains('Forgot Password').click()
//         cy.get('#email').type("sameera@applines.com") //enter email
//         cy.get('.btn').click() //after clicking the submit button a link will be sent to registered email 
//                                     //  and there we need to change the password.
//         cy.visit("https://www.speechpundit.com/#/signin") //After changing the password we  need to visit the signin page again, and need to login in with new credentials
//         cy.wait(2000)
//         cy.get('#email').type("sameera@applines.com") //email
//         cy.get('#password').type("root12345") // new pwd  
//         cy.get('.btn').click()
//         // cy.get('#email').type("sameera@applines.com")
//         // cy.get('#password').type("root12345")
//         // cy.get('btn').click()



//     })


// })


describe("Forgot password", function()
{
    it.only("Forgot password functionality", function(){
        
        cy.visit("https://www.speechpundit.com/#/signin") //visits signin page
        
        cy.contains('Forgot Password').click()
        cy.contains('Email').type("sameera@applines.com") //enter email
        // // cy.contains('')
        cy.get('form').submit()
        // //  cy.get('.btn').click() //after clicking the submit button a link will be sent to registered email 
        //                             //  and there we need to change the password.
        cy.wait(2000)
         cy.visit("https://www.speechpundit.com/#/signin") //After changing the password we  need to visit the signin page again, and need to login in with new credentials
        // cy.wait(2000)
        cy.contains('Email').type('sameera@applines.com')
         cy.contains('Password').type("root12345")
         cy.get('form').submit()
        
        // cy.get('#email').type("sameera@applines.com")
        // cy.get('#password').type("root12345")
        // // cy.wait(2000)
        // cy.get('.btn').click()
        cy.get('form').submit()



    })


})