
let a = Math.floor(Math.random() * 1000)
let b = Math.floor(Math.random() * 1000)

function add(a, b) {
    return(a + b) 
}

add(a, b)


function subtract(a, b) {
    return(a-b)
}

subtract(a, b)

function multiply(a, b) {
    return(a * b)
}

multiply(a, b)

function divide(a, b) {
    return(a/b)
}

divide(a, b)

function increment(a) {
    return (a+1);
}

increment(a);

function decrement(n) {
    return (n - 1);
}

decrement(a);


function makeInt (n) {
    if(n) {
        return n.toString();
    } 

}

makeInt(a);

function makeInt(n) {
    if (n) {
        return parseInt(n, 10);
    }
}


makeInt('0x2328');

function preserveDecimal(n) {
    return parseFloat(n)
}
 
preserveDecimal('2.222')


