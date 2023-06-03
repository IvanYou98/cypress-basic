describe("Assertions", () => {
    beforeEach(() => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    })

    // assert that there are 5 forms in the page
    it('test the length',  () => {
        cy.get(".card-body")
            .should("have.length", 5)
    });

    // assert that the first form has the text "Submit"
    it('test attribute', () => {
        cy.get(".card-body:first button")
            .should("be.enabled")
            .and("be.visible")
            .and("contain.text", "Submit")

        // check a disabled checkbox
        cy.get('.card-body:eq(3)>:last input:last')
            .should("be.disabled")
    });

})
