describe('Handling Alerts', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Test Alert', () => {
        cy.get('button').contains('Click for JS Alert').click()
        cy.get('#result').should('contain.text', 'You successfully clicked an alert')
    })

    it('Test confirm', () => {
        cy.get('button').contains('Click for JS Confirm').click()
        // verify the message of alert
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('I am a JS Confirm')
        })
        // click cancel
        cy.on('window:confirm', () => false)
        cy.get('#result').should('contain.text', 'You clicked: Cancel')
    })

    it('Test prompt', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('John Doe')
        });
        cy.get('button').contains('Click for JS Prompt').click()
        cy.on('window:prompt', () => true)
        cy.get('#result').should('contain.text', 'You entered: John Doe')
    })

    it('Test basic auth', () => {
        cy.visit({
            url: 'https://the-internet.herokuapp.com/basic_auth',
            auth: { username: 'admin', password: 'admin' }
        })
    })
})
