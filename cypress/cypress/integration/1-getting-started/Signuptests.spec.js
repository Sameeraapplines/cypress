//<reference types= "cypress"/>

// describe("SpeechPundit", function()

// {
//     // it.only("Signup", function(){
//     //     cy.visit("https://speechpundit.com/#/")
//     //     cy.get('[routerlink="/signup"]').click()
//     // })

//     it("Signup fails with Empty values for mandatory fields",function()
//     {
//         cy.visit('https://speechpundit.com/#/signup')
//         cy.get('#email').type("meee@applines.com") //email
        
//         // cy.get('#firstName').type("sameera") //firstname
//         cy.get('#lastName').type("SK") //lastname
//         cy.get('#password').type("hello123") //pwd  
//         cy.get('[value="Student"]').check({ force: true })      
//         cy.get("#acceptTerms").check() //checkbox
        
//         cy.get('.btn').click()
//         // We are not providing mandatory field here(Email)
        
//     })


//     it("Signup should fail for Existing user",function()
//     {
        
//         cy.visit("https://speechpundit.com/#/")
//         cy.get('[routerlink="/signup"]').click()
//         cy.get('#email').type("sameera@applines.com") //email
//         // cy.wait(2000)
//         cy.get('#firstName').type("sameera") //firstname
//         cy.get('#lastName').type("SK") //lastname
//         cy.get('#password').type("hello123") //pwd  
//         cy.get('[value="Student"]').check({ force: true })      
//         cy.get("#acceptTerms").check() //checkbox
//         // cy.wait(2000)
//         cy.get('.btn').click()
//         // Add validation check for error message
//     })
//     it.only("Signup works with acceptable values for all mandatory fields",function()
//     {
//         cy.visit('https://speechpundit.com/#/signup')
//         cy.get('#email').type("sameera+38@applines.com") //email
        
//         cy.get('#firstName').type("sameera") //firstname
    
//         cy.get('#lastName').type("sheik")
//         cy.get('#password').type("hello123") //pwd
//         cy.get('[value="Student"]').check({ force: true })
        
//         cy.get("#acceptTerms").check() //checkbox
//         // cy.wait(2000)
//         cy.get('.btn').click()
//         // cy.wait(2000)
//         // Add validation check for Success message
        
//     })







// })

describe('Signup with empty mandatoey fields ', () => {
    it('Signup do not accept empty mandatory fields', () => {
        //-- ACTION --//
        // cy.visit('https://www.speechpundit.com/#/')
        // cy.visit('https://speechpundit.com/#/signup')
        cy.visit("https://speechpundit.com/#/")
        cy.contains('Sign Up').click()

        // cy.contains('Email').type('newuser@applines.com')
        cy.contains('First Name').type("newuser")
        cy.contains('Last Name').type("new")
        cy.contains('Password').type("root123")
        cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        // cy.contains('Password').type("root12345")
        cy.get('form').submit()

    })
})



    describe('Signup with existing credentials ', () => {
        it('Signup do not accept existing credentials', () => {
            //-- ACTION --//
            // cy.visit('https://www.speechpundit.com/#/')
            // cy.visit('https://speechpundit.com/#/signup')
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign Up').click()
    
            cy.contains('Email').type('sameera@applines.com')
            cy.contains('First Name').type("newuser")
            cy.contains('Last Name').type("new")
            cy.contains('Password').type("root123")
            cy.get('[value="Student"]').check({ force: true })      
            cy.get("#acceptTerms").check() //checkbox
            // cy.contains('Password').type("root12345")
            cy.get('form').submit()
    
        })
    })


    describe('Signup with valid credentials ', () => {
        it('Signup  only  accepts valid credentials', () => {
            //-- ACTION --//
            // cy.visit('https://www.speechpundit.com/#/')
            // cy.visit('https://speechpundit.com/#/signup')
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign Up').click()
    
            cy.contains('Email').type('sameera+97@applines.com')
            cy.contains('First Name').type("newuser")
            cy.contains('Last Name').type("new")
            cy.contains('Password').type("root12345")
            cy.get('[value="Student"]').check({ force: true })      
            cy.get("#acceptTerms").check() //checkbox
            // cy.contains('Password').type("root12345")
            // cy.get('form').submit()
            cy.get('.btn').click()
    
        })
    })