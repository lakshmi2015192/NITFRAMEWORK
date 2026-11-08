import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import { cartPage } from '../pages/cartPage'
import productdata from '../testdata/product.json'
import data from '../testdata/login.json'

let lp:LoginPage
let dp:dashboardPage
let cp:cartPage
test.beforeEach(async({page})=>{
lp=new LoginPage(page)
dp=new dashboardPage(page)
cp=new cartPage(page)
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

})
}

