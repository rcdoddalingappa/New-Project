import login from "../Pageobject/Login/Login.Po"
import job from "../Pageobject/Admin/Jobs/Jobstitle.po"
import data from "../../fixtures/Logindata.json"
describe('Job title functinality', () => {
    it('Verify job title', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(login.usernameinput()).type(data.username)
        cy.get(login.passwordinput()).type(data.password)
        cy.get(login.submitbuttoninput()).click()
        cy.contains(job.admininput()).first().click()
        let r = (Math.random() + 1).toString(36).substring(7); //5 random chars 
        let jobt = "QA ENGINEER" + r
        cy.wait(5000)

        job.createjob(jobt, "tester")


        cy.contains(jobt).parent().parent().parent().find('button').eq(1).click()

        let e = (Math.random() + 1).toString(36).substring(7);

        cy.get(job.editjobtileinput()).clear().last().type("LI1NGA" + e)

        cy.get(job.editsavebutton()).click()

        cy.contains('Successfully Updated').should("be.visible")
        cy.wait(5000)



    })
})