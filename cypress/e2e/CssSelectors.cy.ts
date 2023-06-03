describe("Css Selectors", () => {
    it('basic css selectors', function () {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        // tag.classname
        cy.get("a.navbar-brand").click()
        // navigate back to the previous page
        cy.go("back")
        cy.get("input.feedback-input:eq(0) ").type("My First Name")
        // tag[attribute = 'value']
        cy.get("input[name='last_name']").type("My Last Name")
        // parent > child
        cy.get("form>textarea").type("My Comments")
        // select the third child
        cy.get("form>:eq(2)").type("My Email Address")
        // select the second child
        cy.get("input.contact_button:eq(1)")
        // #id
        cy.get("#form_buttons").click()
    })
})
