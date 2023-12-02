interface Animal {
    sex: 'male' | 'female'
    hungry: boolean
    age: number
}

interface Mammal extends Animal {
    weaned: boolean
}

type Person = Mammal & {
    name: string
}

const animal: Person = {
    hungry: false,
    weaned: true,
    sex: 'male',
    age: 6,
    name: 'Tiago'
}
