// Switch Case in TypeScript

function switchCaseExample(value: number): string {
    switch (value) {
        case 1:
            return "Value is 1";
        case 2:
            return "Value is 2";
        case 3:
            return "Value is 3";
        default:
            return "Value is something else";
    }
}

console.log(switchCaseExample(1));
console.log(switchCaseExample(4));
