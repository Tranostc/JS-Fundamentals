const x = parseInt(process.argv[2]);

for (let i = 0; i < 2; i++) {
    console.log("C is fun");
}

for (let i = 0; i < 5; i++) {
    console.log("C is fun");
}

if (isNaN(x) || x < 0) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}