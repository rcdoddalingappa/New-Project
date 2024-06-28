describe('Oder the selenium ruby functionality',() => {

    it.only('Verifying order functionality',() => {

    cy.visit('https://practice.automationtesting.in/')
    
    cy.viewport(1280, 720)
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      
    cy.get('a[data-product_id="160"]').click()
    cy.get('.cartcontents').click({force: true})
    cy.get('.wpmenucart-contents').click()
    cy.contains('Proceed to Checkout').click()
    cy.addBillingAddress("Chandra",'Mallasamdram', 'Intellisense software private limited',"chandratester888@gmail.com", "9083411145","india" )
    cy.get('ul[id="select2-results-1"]   > li:nth-child(2)').click()
    cy.get('input[placeholder="Street address"]').type('Mallasamudram')
    cy.get('input[placeholder="Apartment, suite, unit etc. (optional)"]').type("Nikki Apartment")
    cy.get('#billing_city').type("Rolla")
    //cy.get('#billing_state').first().type("Andhrapradesh")
    cy.get('input[autocomplete="postal-code"]').type("515273")
    cy.get('#place_order').click()
   
        
    })
    describe('', () => {
        it('', () => {
            cy.visit('https://practice.automationtesting.in/shop/')
            
            cy.get('.post-169 > .button').click()
            cy.get('#menu-icon').click()
            cy.get('[title="View your shopping cart"]').click()
            cy.get('.checkout-button').click()
        })
    })
})