const Baby = require("./Baby.js")

class Maternity {
    constructor() {
        this.listOfBabies = []
    }    

    hasBabiesWithSameBirthday() {
        let temporaryMaternity = new Maternity()
        
        for (const baby of this.listOfBabies) {
            if(temporaryMaternity.hasBabyBornIn(baby.birthday)) {
                return true
            } else {
                temporaryMaternity.addBaby(baby)
            }
        }
    
        return false
    }

    hasBabyBornIn(birthday) {
        for (const baby of this.listOfBabies) {
            if(baby.isBirthdayEqualsTo(birthday)) {
                return true
            }
        }
        return false
    }

    addBaby(baby) {
        this.listOfBabies.push(baby)
    }

    createBabies(numberOfBabies) {
        for (let i = 0; i < numberOfBabies; i++) {
            this.listOfBabies.push(new Baby())
        }
    }

    /**
     * Used for testing purposes
     */
    getMaternityStatistics() {
        let statistics = ""

        for (const baby of this.listOfBabies) {
            statistics += baby.sayBirthday() + "\n"
        }

        return statistics
    }

    isEmpty() {
        return this.listOfBabies.length === 0
    }
    
}

module.exports = Maternity