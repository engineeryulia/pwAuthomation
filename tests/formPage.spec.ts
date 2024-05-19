import{test as it} from '@playwright/test'


it.describe('FORM PAGE', () => {
    
    it.only('Fill all fields', async({page}) => {
        await page.goto('https://lambdatest.com/selenium-playground/input-form-demo')
        await page.locator('#name').fill('Mike')
        await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]')
        .pressSequentially('mike@gmail.com', {delay: 500})
        //page.pause()
        await page.locator('input[placeholder="Password"]').fill('test1234')
        await page.locator('input[for="companyname"]~input[placeholder="Company"]').fill('LLC HAppy')
        await page.selectOption('select[name="country"]', {label:"United States"})
        await page.locator('label:has-text("City*")~input#inputCity').fill('Orlando')
        await page.getByPlaceholder('Adress 1').fill("704 Tobie Ct")
        await page.getByRole('textbox', {name: "Zip code"}).fill("70421")

        


develop
datePicker
    })

    
})

