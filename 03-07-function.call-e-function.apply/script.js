function sum(a, b) {
  console.log(this)
  return a + b
}

const me = { name: 'Jose'}

// function.call = sum.call (me, 1, 2)
// function.apply = sum.apply (me, [1, 2])
// Os dois obtém o mesmo resultado.