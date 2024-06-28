import login from "../Pageobject/Login/Login.Po"
import data from "../../fixtures/Logindata.json"
import admin from "../Pageobject/Admin/Admin.PO"
import pim from "../Pageobject/Pim/Pimgage.po"
import addempdata from "../../fixtures/Addempdata.json"
describe('Verifying Orange HRM functionality', () => {
    it('Verifying login functionality', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
        cy.get(login.usernameinput()).type(data.username)
        cy.get(login.passwordinput()).type(data.password)
        cy.get(login.submitbuttoninput()).click()


    })
    it.only('Verifying Jobtitle functionality', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
        cy.get(login.usernameinput()).type(data.username)
        cy.get(login.passwordinput()).type(data.password)
        cy.get(login.submitbuttoninput()).click()
        cy.get(pim.piminput()).eq(1).click()
        cy.wait(2000)
        cy.get(pim.addempinput()).eq(1).click()
        cy.get(pim.firstnameinput()).type(addempdata.firstname)
        cy.get(pim.middlenameinput()).type(addempdata.middlename)
        cy.get(pim.lastnameinput()).type(addempdata.lastname)
        let x = Math.floor((Math.random() * 100) + 1);
        cy.get(pim.employeeidinput()).eq(1).type("3241" + x)
        cy.wait(5000)
        cy.get(pim.checkboxloginput()).click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get(pim.usernameinput()).eq(2).type("AAA" + r)
        cy.get(pim.statusinpu()).last().check({ force: true })
        cy.get(pim.password1input()).first().type(addempdata.password)
        cy.get(pim.password2input()).last().type(addempdata.password)
        cy.get(pim.savebuttoninput()).click()
        cy.contains(pim.successfullysaveinput()).should("be.visible")


    })
   
})