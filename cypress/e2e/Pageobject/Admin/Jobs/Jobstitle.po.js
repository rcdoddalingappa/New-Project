class jobs {
    admininput(){
        return 'Admin'
    }
    jobinput (){
        return 'i[class="oxd-icon bi-chevron-down"]'    
    }
    selecttitleinpu(){
        return 'Job Titles'
    }
   
    addinput(){
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    }
    jobtitleinput(){
        return 'input[class="oxd-input oxd-input--active"]'
    }
    descriptioninput(){
        return 'textarea[class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]'
    }
    savebuttoninput(){
        return 'button[type="submit"]'
    }

    assertioninput(){
        return 'Successfully Saved'
    }
    editbuttoninput(){
        return 'i[class="oxd-icon bi-pencil-fill"]'
    }
    editjobtileinput(){
        return 'input[class="oxd-input oxd-input--active"]'     
    }
    editsavebutton(){
        return 'button[type="submit"]'
    }


    createjob(value1, value2){

    cy.get(this.jobinput()).eq(1).click()
    cy.contains(this.selecttitleinpu()).click()
    cy.get(this.addinput()).click()
    cy.wait(5000)
    cy.get(this.jobtitleinput()).last().type(value1)
    cy.get(this.descriptioninput()).first().type(value2)
    cy.get(this.savebuttoninput()).click()
    cy.contains(this.assertioninput()).should("be.visible")
    }
}
const job =new jobs
export default job