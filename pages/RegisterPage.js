import {Selector,t} from 'testcafe';

class RegisterPage{
    constructor(){
        this.genderMale = Selector('input#gender-male')
        this.genderFemale = Selector('input#gender-female')
        this.Firstname = Selector('input#FirstName')
        this.Lastname = Selector('input#LastName')
        this.email = Selector('input#Email')
        this.dateOfbirthdate = Selector("select[name='DateOfBirthDay']")
        this.dateofMonth = Selector("select[name='DateOfBirthMonth']")
        this.dateofYear = Selector("select[name='DateOfBirthYear']")
        this.companyName = Selector('input#Company')
        this.Password = Selector('input#Password')
        this.confirmPassword = Selector('input#ConfirmPassword')
        this.submitBtn= Selector("input[name='register-button']")
        this.successfulMsg = Selector('div.result').withText('Your registration completed');
    }

    async selectDay(day){
        const DayOption = this.dateOfbirthdate.find('option');
        await t
            .click(this.dateOfbirthdate)
            .click(DayOption.withText(day));
    }

    async selectMonth(month){
        const MonthOption = this.dateofMonth.find('option');
        await t
            .click(this.dateofMonth)
            .click(MonthOption.withText(month));
    }

    async selectYear(year){
        const DayOption = this.dateofYear.find('option');
        await t
            .click(this.dateofYear)
            .click(DayOption.withText(year));
    }
}

export default new RegisterPage();