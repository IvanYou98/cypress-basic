describe('Basic Buttons', () => {

    it('Basic Buttons', () => {
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        // dropdown menus
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get('#dropdowm-menu-3').select('JQuery')

        // checkboxes
        cy.get('#checkboxes input[value="option-2"]').check()
        cy.get('#checkboxes input[value="option-3"]')
            .should('be.checked')
            .uncheck()

        // radio buttons
        cy.get('#radio-buttons input[value="orange"]').check()

        // check selected and disabled
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('be.checked')
        cy.get('#fruit-selects').should('have.value', 'grape')
    })

})
