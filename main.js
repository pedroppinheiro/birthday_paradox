const fs = require('fs');
const Maternity = require("./Maternity.js")

const maxNumberOfBabiesToCreate = 100
const totalOfMaternities = 10000 // high number to generate more precise statistics

let numberOfBabiesToCreate = 1
while (numberOfBabiesToCreate <= maxNumberOfBabiesToCreate) {
    let percentage = getPercentageOfMaternitiesWithBabiesBornInSameDay(totalOfMaternities, numberOfBabiesToCreate)

    console.log("Total of maternities: " + totalOfMaternities)
    console.log("Each maternity had " + numberOfBabiesToCreate + " babies")
    console.log(percentage + "% of maternities had at least two babies that were born at the same day" + "\n")

    fs.appendFileSync("./data.txt", percentage+"\n", function(err) {
        if(err) {
            return console.log(err);
        }
    })

    numberOfBabiesToCreate++
}

/**
 * Creates a given number of maternities, each with a given number of babies, and
 * returns the percentage of maternities that had at least two babies
 * with the same birthday
 * 
 * @param {int} totalOfMaternities amount of maternities to be created
 * @param {int} numberOfBabiesToCreate the number of babies to create in each maternity
 */
function getPercentageOfMaternitiesWithBabiesBornInSameDay(totalOfMaternities, numberOfBabiesToCreate) {
    let amountOfMaternitiesWithBabiesWithSameBirthday = 0

    for (let i = 1; i <= totalOfMaternities; i++) {
        let maternity = new Maternity();
        maternity.createBabies(numberOfBabiesToCreate)
        if(maternity.hasBabiesWithSameBirthday()) {
            amountOfMaternitiesWithBabiesWithSameBirthday++
        }
    }

    return (amountOfMaternitiesWithBabiesWithSameBirthday / totalOfMaternities) * 100
}