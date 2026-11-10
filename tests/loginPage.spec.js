import{test,expect} from '@playwright/test'
//import { LoginPage} from '../pages/loginPage'
import data from '../testdata/login.json'
import { pageLogin } from '../pages/pageLogin'


let lps  //creating the reference at the global level
//hooks concepts in playwright
test.beforeEach(async({page})=>{
     lps=new pageLogin(page)
    await lps.launchUrls(data.url)
})

test('valid login user',async({page})=>{
    await lps.loginIntoApplications(data.email,data.password)
    await expect(lps.homePageIdentifiers).toBeVisible();

})
test('invalid login user',async({page})=>{
    await lps.loginIntoApplications(data.email,data.invalidPassword)
    await expect(lps.errorMessages).toBeVisible();

})