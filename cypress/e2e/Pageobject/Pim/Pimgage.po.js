class Pimpage{
    piminput(){
        return  'span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]'
    }
    addempinput(){
        return 'a[class="oxd-topbar-body-nav-tab-item"]'
    }
    firstnameinput(){
        return 'input[name="firstName"]'
    }
    middlenameinput(){
        return 'input[name="middleName"]'
    }
    lastnameinput(){
        return 'input[name="lastName"]'
    }
    checkboxloginput(){
        return 'span[class="oxd-switch-input oxd-switch-input--active --label-right"]'
    }
    usernameinput(){
        return 'input[class="oxd-input oxd-input--active"]'
    }
    statusinpu(){

        return 'input[type="radio"]'            
    }
    password1input(){
        return 'input[type="password"'     
    }
    password2input(){
        return 'input[type="password"'    
    }
    savebuttoninput(){
        return 'button[type="submit"]'
    }
    successfullysaveinput(){
        return 'Successfully Saved'
    }
    employeeidinput(){

        return 'input[class="oxd-input oxd-input--active"]'
    }
}
const pim =new Pimpage
export default pim