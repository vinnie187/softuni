function hello(input) {
    let name = input.shift();
    let age = Number(input.shift());
    console.log(`Hello,my name is ${name} and I am ${age} years old!`);
}

hello ( [ 'Vinnie', '30' ] ) 