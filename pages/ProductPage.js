import {Selector,t} from 'testcafe';

class ProdcutPage{
    constructor(){
        this.ProductPrice = Selector('span#price-value-4').withText('$1,800.00')
        this.quantityDetails = Selector('input#product_enteredQuantity_4')
        this.AddTocartBtn = Selector('input#add-to-cart-button-4')
        this.successMessage = Selector('div.bar-notification.success')
    }
}

export default new ProdcutPage();