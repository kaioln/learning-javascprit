"use strict";
function greet(name) {
    console.log(`hello, ${name}!` //Typescript não aceita uppercase em number.
    );
}
greet('Daniel');
function greety(name, age) {
    console.log(`hello, ${name.toUpperCase()}!`);
}
greety('Daniel', 12); //posso passar sem número também por conta do '?'
