
import { Locator, Page } from "@playwright/test";

export class pageLogin{
    
        constructor(page){
            this.page=page
            this.email=this.page.locator('#userEmail');
            this.password = this.page.getByPlaceholder('enter your passsword');
            this.loginButtons=this.page.locator('#login');
            this.errorMessages=this.page.locator('#toast-container');
            this.homePageIdentifiers=this.page.locator('[routerlink="/dashboard/"]');
        }
            async launchUrls(url){
            await this.page.goto(url)
        }
        async loginIntoApplications(username,password){
            await this.email.fill(username);
            await this.password.fill(password);
            await this.loginButtons.click()
        }


}