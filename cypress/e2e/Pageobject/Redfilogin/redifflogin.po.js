class rediflogin {
    Nameinput(){
        return 'input[name^="name"]'
    }
    mailidinput(){
        return 'input[name^="login"]'
    }
    passwordinput (){
        return 'input[name^="passwd"]'
    }
    passwordretypeinput(){
        return '#newpasswd1'
    }
    alternateemaiinput(){
        return 'input[name^="altemail"]'
    }
    mobilenumberinput(){
        return 'input[name^="mobno"]'
    }
    dayinput(){
        return 'select[name^="DOB_Day"]'     .select("10")
    }
    monthinput(){
        return 'select[name^="DOB_Month"]'   .select("MAY")
    }
    yearinput(){
        return 'select[name^="DOB_Year"]'    .select('1991')
    }
    genderinput(){
        return 'input[name^="gender"]'        .check()
    }
    genderassetinput(){
        return 'input[name^="gender"]'         .sh
    }


}