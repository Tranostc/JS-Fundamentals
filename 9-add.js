function add(a, b) {
    return a + b;
}

const firstInt = parseInt(process.argv[2]);
const secondInt = parseInt(process.argv[3]);

const result = add(firstInt, secondInt);
console.log(result);