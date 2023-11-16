var person1 = {
    name: 'Daniel',
    age: 22
}

var person2 = {
    name: 'Vitor',
    age: 23,
}

var person3 = {
    name: 'Kaio',
    age: 23
}

var list = [person1, person2, person3]

// console.log(list[2])

for (var person of list) {
    console.log(person.name)
}