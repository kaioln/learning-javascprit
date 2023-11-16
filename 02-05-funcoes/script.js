function greet(name = 'Mergulhador') {
    console.log('Boa madrugada, ' + name)
    
}
greet()
// 

function greet1(name1) {
    console.log('Boa madrugada, ' + name1)
    
}
greet('Felipe')
// 

function greet2(name2 = 'Kaio') {
    return 'Boa madrugada, ' + name2
    
}
var greeting = greet2()
console.log(greeting)
