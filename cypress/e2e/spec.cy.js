describe('template spec', () => {
it('passes', () => {
    cy.visit('http://localhost:1234/')

    cy.contains("Go to my linkedin")
      .invoke("removeAttr", "target")
      .click() // will open the contact page in a new tab
    //cy.get("h1").should("have.text", "Contact");

    /* cy.contains('Go to my linkedin').click() */
  })
})