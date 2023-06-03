describe("Test Hooks", () => {
    before(() => {
        cy.log("Runs once before all tests in the block")
    })

    after(() => {
        cy.log("Runs once after all tests in the block")
    })

    beforeEach(() => {
        cy.log("Runs before each test in the block")
    })

    afterEach(() => {
        cy.log("Runs after each test in the block")
    })

    it("Test 1", () => {
        cy.log("Test 1")
    })

    it("Test 2", () => {
        cy.log("Test 2")
    })
})