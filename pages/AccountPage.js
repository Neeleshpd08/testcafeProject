import {Selector,t} from 'testcafe';

class AccountPage{
    constructor(){
        this.verifyPage = Selector('h1').withText('My account - Customer info')
        this.orderLink = Selector("div.listbox a[href='/order/history']")
        this.NoOrderVerification = Selector('div').withText('No orders')
    }
}
export default new AccountPage();