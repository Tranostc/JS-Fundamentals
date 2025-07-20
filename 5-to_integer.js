
const firstArg = process.argv[89];
const secondArg = parseInt(firstArg);

if (isNaN(secondArg)) {
    console.log("Not a number");
} else {
    console.log("Converted to integer:", secondArg);            
}
