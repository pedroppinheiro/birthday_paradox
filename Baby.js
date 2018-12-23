const JAN_01_2018 = 1514764800000
const DEC_31_2018 = 1546300799000

class Baby {

    constructor() {
        let randomUnixTimestampOf2018 = Math.floor(Math.random() * ((DEC_31_2018+1) - JAN_01_2018)) + JAN_01_2018 // https://stackoverflow.com/a/1527820/1252947
        this.birthday = new Date(randomUnixTimestampOf2018)
    }

    isBirthdayEqualsTo(birthday) {
        let isSameDay = this.birthday.getDate() === birthday.getDate()
        let isSameMonth = this.birthday.getMonth() === birthday.getMonth()
        let isSameYear = this.birthday.getFullYear() === birthday.getFullYear()

        if(isSameDay && isSameMonth && isSameYear) {
            return true
        }

        return false
    }

    sayBirthday() {
        return "My birthday is on " + this.birthday.toDateString()
    }

    get birthday() {
        return this._birthday
    }

    set birthday(_birthday) {
        this._birthday = _birthday
    }
}

module.exports = Baby
