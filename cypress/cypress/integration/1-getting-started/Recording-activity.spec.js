///<reference types= "cypress"/>

// describe("SpeechPundit", function()
// {  

//     it("Activity", function()
//     {
//         cy.visit("https://speechpundit.com/#/signin")
//         cy.get('#email').type("sameera@applines.com")

//         cy.get('#password').type("root12345")
//         cy.get('.btn').click()
//         // cy.wait(1000)
//         cy.get('[routerlink="/activity"]').click({multiple:true})
//         // cy.get('[routerlink="/favorites"]').click() //favourites
//         // cy.get('[routerlink="/analytics"]').click() //analytics
//         // cy.get('.p-toast-icon-close-icon').click() //analytics close
//         // cy.get('#menu-1').click() 
//         // cy.get('[for="btnradio2"] > .fas').click() //grid view
//         // cy.get(':nth-child(1) > .mb-4 > .card-body > .btn').click() //summary


//              cy.get('#menu-1').click() 
//              cy.get('[for="btnradio2"] > .fas').click() //grid view
//              cy.get(':nth-child(1) > .mb-4 > .card-body > .btn').click() //summary
//              cy.get('[routerlink="/analytics"]').click() //analytics
//              cy.get('.p-toast-icon-close-icon').click() //analytics close
//              cy.get('[routerlink="/favorites"]').click() //favourites



//     })

//     it.only("Recording", function()
//      {
//          cy.visit("https://speechpundit.com/#/signin")
//          cy.get('#email').type("sameera@applines.com")

//          cy.get('#password').type("root12345")
//         //  cy.get('.btn').click().then(() => {
//         //     // Debugger is hit after the cy.visit
//         //     // and cy.get command have completed
//         //     cy.visit("https://speechpundit.com/#/record").then(() => 
//         //         // cy.wait(2000)
//         //         cy.get('.rec-btn').click({force: true})
//         //     )
//         cy.get('.btn').click()
//         cy.visit("https://speechpundit.com/#/record")
//         cy.wait(2000)
//         cy.get('.rec-btn').click({force: true})
//         cy.wait(2000)
//         })


// })

describe('Activity page', () => {
    it('Verifies availability and content of Activity page', () => {
        cy.visit("https://speechpundit.com/#/")
        cy.contains('Sign in').click()

        cy.contains('Email').type('sameera@applines.com')
        cy.contains('Password').type("root12345")
        cy.get('form').submit()
        cy.contains('Activity').click()
         cy.contains('Summary')
         cy.get('[routerlink="/favorites"]').click() //favourites

         cy.get('[routerlink="/analytics"]').click() //analytics
         cy.wait(2000)
         cy.get('.p-toast-icon-close-icon').click() 
        //  cy.contains('FAVORITES')
        // cy.contains('ANALYTICS')



    })
    })

    describe('recording page', () => {
        it('Verifies availability and content of Recording page', () => {
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign in').click()
    
            cy.contains('Email').type('sameera@applines.com')
            cy.contains('Password').type("root12345")
            cy.get('form').submit()
            cy.contains('Record').click()  
            cy.contains('Click here to practice your speech').click()  




        })
})