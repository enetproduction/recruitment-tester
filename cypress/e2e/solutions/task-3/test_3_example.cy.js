describe('Test suite', function () {
    it('Display array items', function () {
        const testArray = ['one', 'two', 'three', 'four']
        cy.wrap(testArray).each((item) => {
            cy.log(item) // console.log(item)
        })
    })
}) 