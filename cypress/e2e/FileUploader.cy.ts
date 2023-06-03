describe("File Upload", () => {
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/upload")
    })

    it('upload single file',  () => {
        cy.get("#file-upload")
            .selectFile("./cypress/fixtures/example.json")
        cy.get("#file-submit").click()
        cy.get('.example>h3').should("contain.text", "File Uploaded!")
    })

    it('drag and drop file',  () => {
        cy.get("#drag-drop-upload")
            .selectFile("./cypress/fixtures/example.json",
                {action: 'drag-drop'})
    })
})
