import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { dashboardPage } from '../pages/dashboardPage'
import product from '../testdata/product.json'
import data from '../testdata/login.json'

let lp:LoginPage
let dp:dashboardPage

test.beforeEach(async({page})=>{
lp=new LoginPage(page)
dp=new dashboardPage(page)
await lp.launchUrl(data.url)
await lp.loginIntoApplication(data.email,data.password)
await expect(lp.homePageIdentifier).toBeVisible()
})

for(const p of product){
test(`add the product to cart ${p.productName}`,async()=>{
    await dp.searchProduct(p.productName,'Add To Cart')
    await expect(dp.addToCartMessage).toContainText(p.successMessage)
    await dp.navigateToCart()
})
test(`view the item ${p.productName}`,async()=>{
await dp.searchProduct(p.productName,'View')
await expect(dp.viewpageProductName).toContainText(p.productName)
})

}

