import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import { cartPage } from '../pages/cartPage'
import { paymentPage } from '../pages/paymentPage'
import productdata from '../testdata/product.json'
import data from '../testdata/login.json'
import paymentData from '../testdata/paymentData.json'

let lp:LoginPage
let dp:dashboardPage
let cp:cartPage
let pp:paymentPage
test.beforeEach(async({page})=>{
lp=new LoginPage(page)
dp=new dashboardPage(page)
cp=new cartPage(page)
pp=new paymentPage(page)
await lp.launchUrl(data.url)
await lp.loginIntoApplication(data.email,data.password)
await expect(lp.homePageIdentifier).toBeVisible()
})

for(const p of productdata){
test(`add the product to cart ${p.productName}`,async()=>{
    await dp.searchProduct(p.productName,'Add To Cart')
    await expect(dp.addToCartMessage).toContainText(p.successMessage)
    await dp.navigateToCart()
    await cp.proceedToCheckout();
    //await pp.fillPaymentDetails(paymentData)
    await pp.selectCountryName(paymentData)
    await pp.fillPaymentDetails(paymentData)
    await pp.placeOrder()
})

}

