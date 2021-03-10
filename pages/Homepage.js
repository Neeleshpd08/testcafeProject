import {Selector,t} from 'testcafe';

class Homepage{
    constructor(){
        this.HomepageHeader = Selector('h2').withText('Welcome to our store');
        this.VerifyLinks = Selector('div.header-links ul')
        this.RegisterLink = Selector('a').withText('Register')
        this.LoginLink = Selector('a').withText('Log in')
        this.WishlistLink = Selector('a').withText('a.ico-wishlist')
        this.CartLink = Selector('li#topcartlink')
        this.myAccountLink = Selector('a').withText('My account')
        this.logout = Selector('a').withText('Log out')
        this.registerPageVerifaction = Selector('h1').withText('Register')
        this.currencyList = Selector('select#customerCurrency');
    }

    get productSearch(){
        return Selector('input[id="small-searchterms"]');
    }

    async Search(Product){
        await t 
            .typeText(this.productSearch,Product)
            .pressKey('enter')
            .wait(3000);
    }

    async changeCurrency(currency){
        await t
            .click(this.currencyList)
            .click(Selector('Option',{text:this.currency}))
    }
}

export default new Homepage();