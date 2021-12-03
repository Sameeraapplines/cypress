///<reference types= "cypress"/>

describe("SpeechPundit", function()
{
    it("visit the website", function(){
        cy.visit("https://speechpundit.com/#/")
        // cy.get('[routerlink="/signup"]').click()
    })

})