describe("Test the tabs", () => {
    it('Removing attribute', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("div.example>a")
            .invoke("removeAttr", "target")
            .click()
        cy.get('h3').should("contain.text", "New Window")
    });

    it('Visit the url', () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("div.example>a").then($link => {
            let url = $link.prop("href")
            cy.visit(url)
            cy.get('h3').should("contain.text", "New Window")
        })
    });
})
