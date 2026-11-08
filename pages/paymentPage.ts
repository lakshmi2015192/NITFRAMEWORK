import { Locator,Page } from "@playwright/test";
export type PaymentData = {
  "CreditCardNumber": string
  "expiryMonth": string
  "expiryYear": string
  "cvv": string
  "NameonCard": string
  "couponCode": string
  "country": string
}
  export class paymentPage{
    page:Page
    creditcardNumber:Locator
    expiryMonth:Locator
    expiryYear:Locator
    cvvCode:Locator
    nameOnCard:Locator
    applyCoupon:Locator
    applyCouponBtn:Locator
    selectCountry:Locator
    placeOrderBtn: Locator
        constructor (page:Page){
        this.page=page
        this.creditcardNumber=this.page.locator('.input.txt.text-validated').first()
        this.expiryMonth=this.page.locator('.input.ddl').first()
        this.expiryYear=this.page.locator('.input.ddl').last()
        this.cvvCode=this.page.locator('.input.txt').nth(1)
        this.nameOnCard=this.page.getByRole('textbox').nth(2)
        this.applyCoupon=this.page.locator(`input[name="coupon"][type="text"]`)
        this.applyCouponBtn=this.page.locator('.btn.btn-primary.mt-1')
        //this.selectCountry=this.page.getByRole('textbox', { name: 'Select Country' })//pressSequentially('in')
        this.selectCountry=this.page.getByPlaceholder('Select Country')
        this.placeOrderBtn = this.page.getByText('Place Order', { exact: true }).first()

    }
async fillPaymentDetails(paymentData:PaymentData) {
        await this.creditcardNumber.fill(paymentData.CreditCardNumber)
        await this.expiryMonth.selectOption(paymentData.expiryMonth);
        await this.expiryYear.selectOption(paymentData.expiryYear);
        await this.cvvCode.fill(paymentData.cvv);
        await this.nameOnCard.fill(paymentData.NameonCard)
        await this.applyCoupon.fill(paymentData.couponCode)

        await this.applyCouponBtn.click()
    }
    async selectCountryName(paymentData:PaymentData) {
        await this.selectCountry.pressSequentially(paymentData.country);
        const countryoption = this.page.getByText(paymentData.country,{exact:true}).last();
await countryoption.click();
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
        //await this.page.waitForTimeout(3000)

    }
}
