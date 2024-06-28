

describe('Orange HRM functionali', () => {
    it('Verify login functionality', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Admin').click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        cy.get('div[class="oxd-select-text-input"]').first().click()
        cy.contains('ESS').click()
        cy.get('input[placeholder="Type for hints..."]').type('Kumar')
        cy.get('div[class="oxd-select-text-input"]').last().click()
        cy.contains('Enabled').last().click()
        cy.get('input[autocomplete="off"]').first().type("raja1", { delay: 5000 })
        cy.get('input[type="password"').first().clear().type('Welcome@123', { delay: 5000 })
        cy.get('input[type="password"').last().type('Welcome@123')
        cy.get('button[type="submit"]').click()

    })

    it.only('Verify Jobtitle functionality', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Admin').eq(0).click()
        cy.get('i[class="oxd-icon bi-chevron-down"]').eq(1).click()
        cy.wait(5000)
        cy.contains('Job Titles').click()
        cy.wait(5000)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        let title = "QA TESTER" + r
        cy.get('input[class="oxd-input oxd-input--active"]').last().type(title)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
        cy.contains('Successfully Saved').should('be.visible')
        let y = (Math.random() + 1).toString(36).substring(7);
        let rd = "Masterdegree" + y
        cy.contains(title).parent().parent().parent().find('button[type="button"]').eq(1).click()
        cy.wait(5000)
        cy.get('input[class="oxd-input oxd-input--active"]').last().clear().type(rd)
        cy.get('button[type="submit"]').click()
        cy.contains('Successfully Updated').should("be.visible")
        cy.contains(rd).parent().parent().parent().find('button[class="oxd-icon-button oxd-table-cell-action-space"]').first().click()
        cy.wait(5000)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
        cy.contains('Successfully Deleted').should("be.visible")

    })
})