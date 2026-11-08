import{Locator,Page} from '@playwright/test'

export class cartPage{
    page:Page
    checkoutButton:Locator

constructor (page:Page){
    this.page=page
    this.checkoutButton=this.page.getByText('Checkout')
   
}
async proceedToCheckout(){
    await this.checkoutButton.click();
        //await this.checkout.click()
    await this.page.waitForTimeout(3000)
    }

}