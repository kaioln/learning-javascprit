var person = {
    age: 14,
    name: 'Lucas'
}

// função pura ( Não altera os dados inputados na função )
function getRemainingYearsToMajorty(person) {
    return 18 - person.age
}

// função impura ( Altera os dados inputados na função )
function increasePersonAge(person) {
    person.age = person.age + 1
}

// Chamou um método impuro, que altera no valor original.
increasePersonAge(person)

var remainingYears = getRemainingYearsToMajorty(person)

console.log(remainingYears)