describe("Tables", () => {
    it('test the length', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#t01 tr:first>th').should("have.length", 3)
        cy.get("#t01 tr").should("have.length", 4)
    })

    it('test get specific cell', () => {
        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#t01').as("table")
        cy.get("@table").find("tr").eq(2)
            .find("td").eq(1)
            .should("contain.text", "Jackson")
    })

    it('test table data', () => {
            cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html");
            let table = []
            cy.get('#t01').as("table").then(() => {
                cy.get("@table").find("tr").each(($row, rowIdx) => {
                    // skip the table header
                    if (rowIdx === 0) return
                    let rowData = [];
                    cy.wrap($row).find("td").each(($cell) => rowData.push($cell.text()))
                        .then(() => {
                            table.push(rowData)
                        })
                }).then(() => {
                    console.log(table);
                });
            });

        }
    )
})
