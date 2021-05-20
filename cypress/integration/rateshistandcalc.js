//const { it } = require("mocha");

const URL = "127.0.0.1:5501/index.html";
const HIDDEN = 'hidden'

context('ratehistandcalc', () => {
    before(() => {
        cy.visit(URL);
    });
    it('Makes sure the history and calculator tabs are hidden', () => {
        cy.get(".history").should('have.class', HIDDEN)
        cy.get(".calculator").should('have.class', HIDDEN)
    });
    it('Clicks on both toggles and they shot the right tab', () => {
        cy.get(".history-toggle").click();
        cy.wait(500);
        cy.get(".history").should('be.visible');
        cy.get(".calculator").should('not.be.visible');
        cy.get(".calculator-toggle").click();
        cy.get(".calculator").should('be.visible');
        cy.get(".history").should('not.be.visible');
    });
    it('Does not submit if it has no value on both forms', () => {      
        cy.get(".history-toggle").click();
        cy.get(".button-hist").click();
        cy.get(".displayhist").should('be.visible');
        cy.get(".calculator-toggle").click();
        cy.get(".button-calc").click();
        cy.get(".displaycalc").should('be.visible');
    });
});