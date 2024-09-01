// Intermediate TypeScript Example: Function with Generics

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1, output2);
