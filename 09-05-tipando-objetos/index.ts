type Person = {
    name: string
    age: number
    contacts?: string[]
    isAlive: boolean
}

const person: Person = {
    age: 15,
    name: 'Lucas',
    isAlive: true,
    contacts: [
        'kaio.leonardoss@gmail.com'
    ]
}

const person2: Person = {
    age: 18,
    name: 'Pedro',
    isAlive: true,
}