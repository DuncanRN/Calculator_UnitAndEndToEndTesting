describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  // Do the number buttons update the display of the running total?
  it('should have number buttons updating the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })


  // Do the arithmetical operations update the display with the result of the operation?
  it('should have arithmetic to update the result', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })


  // Can multiple operations be chained together?
  it('should have multiple operations be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
  })
  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('should have expected output when using negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should have expected output when using decimals', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.5')
  })


  it('should have expected output when using decimals', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1000000000000000')
  })

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  it('should give Infinity when dividing by zero', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();

    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '∞')
  })

  // it('should give Out of Range trying to display a huge number', () => {
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#operator-add').click();
  //   cy.get('#number1').click();

  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', '1000000000000000')
  // })


})