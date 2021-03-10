import {Selector,t} from 'testcafe';

class LoginPage{
    constructor(){
        this.email = Selector('#Email')
        this.password = Selector('#Password')
        this.LoginBtn = Selector('input.button-1.login-button')
        this.accountheader = Selector('strong').withText('Returning Customer');
    }
}

export default new LoginPage(); 