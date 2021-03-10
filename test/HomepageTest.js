import {ClientFunction} from 'testcafe';
import HomePage from '../pages/Homepage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';
import ProdcutPage from '../pages/ProductPage';
import Cart_Page from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';

const URL = "http://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href); 
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'Neelesh'+ randomNumber+'@test.com';

fixture("HomePage Fixture")
    .page(URL);

test("Verify homepage Header", async t => { 
    await t
        .expect(getURL()).eql(URL)
        .expect(HomePage.HomepageHeader.exists).ok();    
})

test("User registration", async t=>{
    await t
        .click(HomePage.RegisterLink)
        .expect(HomePage.registerPageVerifaction.exists).ok()
        .click(RegisterPage.genderMale)
        .typeText(RegisterPage.Firstname,'Neelesh')
        .typeText(RegisterPage.Lastname,'Gupta')
        await RegisterPage.selectDay('22')
        await RegisterPage.selectMonth('February')
        await RegisterPage.selectYear('1995')
        await t
        .typeText(RegisterPage.email,userEmail)
        .typeText(RegisterPage.companyName,'Home Services')
        .typeText(RegisterPage.Password,'Neelesh')
        .typeText(RegisterPage.confirmPassword,'Neelesh')
        .click(RegisterPage.submitBtn)
        .expect(RegisterPage.successfulMsg.exists).ok()
        .click(HomePage.logout);
})

test('Login to user profile and verify orders', async t => {
    await t
        .click(HomePage.LoginLink)
        .expect(LoginPage.accountheader.exists).ok()
        .typeText(LoginPage.email,userEmail)
        .typeText(LoginPage.password,"Neelesh")
        .click(LoginPage.LoginBtn)
})

test('Accounts Order Verification',async t =>{
    await t
        .click(HomePage.myAccountLink)
        .typeText(LoginPage.email,userEmail)
        .typeText(LoginPage.password,"Neelesh")
        .click(LoginPage.LoginBtn)
        .expect(AccountPage.verifyPage.exists).ok()
        .click(AccountPage.orderLink)
        .expect(AccountPage.NoOrderVerification.exists).ok()
})

test('Search Product and add to cart', async t =>{
    await HomePage.Search('Apple MacBook Pro 13-inch')
    await t 
        .doubleClick(Cart_Page.AppleProductBtn)
        .wait(2000)
        .expect(ProdcutPage.ProductPrice.exists).ok()
        .click(ProductPage.quantityDetails).pressKey('Delete')
        .typeText(ProdcutPage.quantityDetails,'4')
        .click(ProdcutPage.AddTocartBtn)
        .expect(ProdcutPage.successMessage.exists).ok()
        .click(HomePage.CartLink)
        .click(Cart_Page.Checkbox)
        .click(Cart_Page.checkOutBtn);
})