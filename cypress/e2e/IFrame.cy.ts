
describe("Play with IFrame", () => {
    it('enter text in the editor', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.iframe()
            .clear().type("Hello Frame!")
            .should("contain.text", "Hello Frame!")
    })

    it('interact with elements inside iframe', () => {
        cy.visit("http://www.webdriveruniversity.com/IFrame/index.html")
        // cy.iframe('#frame').find("#button-find-out-more").click()
        cy.iframe("#frame").find("a:contains('Our Products')").click()
    })
})
