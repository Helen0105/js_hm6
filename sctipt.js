

console.log("ex1");
let number = 0;
while(number < 10){
    number += 1;
    console.log(number);
}



console.log("ex2");
for(let i = 2; i <= 20; i += 1){
    if (i%2 === 0) {
        console.log(i);
    }
}




console.log("ex3");
for(let i = 0; i <= 10; i += 1){
    console.log(`7 x ${i} = ${7 * i}`);
}




console.log("ex4");
const n = 10;
for(let i = 0; i <= 18; i += 1){
    if (i >= n) {
        break;
    }
    console.log(i);
}




console.log("ex5");
let num = 1;
while(num < 20){
    num += 1;
    if(num%3 === 0){
        console.log(num);
        continue;
    }
}