class adminpage {
    admininput(){
        return 'Admin' 
    }
    addbuttoninput(){
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    }
    userroleinput(){
        return 'div[class="oxd-select-text-input"]'
    }
    empnameinput(){
        return 'input[placeholder="Type for hints..."]'
    }
    statusinput(){
        return 'div[class="oxd-select-text-input"]'   
    }
    usernameinput(){
        return 'input[class="oxd-input oxd-input--active oxd-input--error"]'
    }
    password2inpu(){
        return 'input[type="password"]' 
    }
    password1input(){
        return 'input[type="password"]'  
    }
    savebuttoninput(){
        return ' Save '
    }
}
const admin = new adminpage

export default admin