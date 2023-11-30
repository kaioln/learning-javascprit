declare namespace Person {
  export interface Default {
    name: string
    age: number
  }

  export interface WithContacts extends Default {
    contacts: Email[]
  }
}