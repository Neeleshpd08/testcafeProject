import {Selector,t} from 'testcafe';

class CartPage{
    constructor(){
        this.AppleProductBtn = Selector('div.picture a')
        this.VerifyPage = Selector('h1').withText('Shopping cart')
        this.Checkbox = Selector('input#termsofservice')
        this.checkOutBtn = Selector('button#checkout')
    }
}

export default new CartPage();