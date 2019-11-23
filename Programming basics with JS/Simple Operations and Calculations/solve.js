function solve() {
    let firstName = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let town = input.shift();
    console.log( "You are" + firstName + lastName "and i`m" + age "from" town );
    

}

solve(["Pesho","Peshov","19","Shumen"]);