import { Locator,Page } from "@playwright/test";

export class dashboardPage{
    page:Page
    products:Locator
    homepageProductPrice:Locator
    viewpageProductPrice:Locator
    viewpageProductName:Locator
    addToCartMessage:Locator
    cart:Locator

    constructor(page:Page){
        this.page=page
        this.products=this.page.locator('div.card-body')
        this.homepageProductPrice=this.page.locator('div.text-muted')
        this.viewpageProductPrice=this.page.locator('.rtl-text h3')
        this.viewpageProductName=this.page.locator('.rtl-text h2')
        this.addToCartMessage=this.page.locator('#toast-container')
        this.cart=this.page.locator('[routerlink="/dashboard/cart"]')// this is correct
        
    }
//create the methods
//searchProduct is a method name,it can be any name but some meaningfulname
    async searchProduct(productName:string,button: 'View' | "Add To Cart"){
        //wait for atleast one product to load on the page
        await this.products.nth(0).waitFor()
        const countOfProduct=await this.products.count()
        //use the for loop to iterate through the list of products.
        for(let i=0;i<countOfProduct;i++){
            //pick one product from the list
            const product=await this.products.nth(i)
            //read the name of the product
            const productText=await product.locator('b').textContent()
            //cpmpare the captured product name with test product name
            if(productText?.trim().toLowerCase()===productName.trim().toLowerCase()){
                //find the button by the text
                await product.getByRole('button',{name:button}).click()
                break
            }

    }
}
//creating the method to navigate to cart
async navigateToCart(){
    await this.cart.first().click()
    }

}
