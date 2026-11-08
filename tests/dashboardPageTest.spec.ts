import{test,expect} from '@playwright/test'
import { dashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";


const url='https://rahulshettyacademy.com/client/#/auth/login'
let email='samrajya.badabagni@gmail.com'
let password='Playwright@2026'
let productName='ADIDAS ORIGINAL'

let lp: LoginPage
let dp: dashboardPage

test.beforeEach(async({page})=>{
lp=new LoginPage(page)
dp=new dashboardPage(page)
await lp.launchUrl(url)
await lp.loginIntoApplication(email,password)
await expect(lp.homePageIdentifier).toBeVisible()
})

test('Add to Cart',async()=>{
await dp.searchProduct(productName,'Add To Cart')
await expect(dp.addToCartMessage).toBeVisible()
await dp.navigateToCart()

})

test('View to product',async()=>{
  await dp.searchProduct(productName,'View')
  await expect(dp.viewpageProductName).toHaveText(productName)

})