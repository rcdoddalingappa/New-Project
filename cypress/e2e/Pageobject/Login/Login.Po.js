class loginpage {

    orangeHRmlogo() {
        return 'img[alt="company-branding"]'

    }

    usernameinput() {
        return 'input[name="username"]'
    }
    passwordinput() {
        return 'input[type="password"]'
    }
    submitbuttoninput() {
        return 'button[type="submit"]'
    }
    forgetpasswordinput() {
        return 'Forgot your password?'
    }

}
const login = new loginpage

export default login