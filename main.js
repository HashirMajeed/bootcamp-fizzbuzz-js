// Main function
function fizzbuzz() {
    console.log("Hello, world!");

    const prompt = require("prompt-sync")({ sigint: true});
    let number = prompt("How many numbers do you want to play until: ");
    var bucket = [];
    for (let i = 0; i <= 17; i++) {
        bucket[i] = false;
    }
    const clArgs = process.argv.splice(2, process.argv.length);
    clArgs.map(x => bucket[x] = true);
    for (let i = 1; i <= number; i++) {
        var words = [];
        var num = false;
        if (i % 3 == 0 && bucket[3]) {
            words.push("Fizz");
        }
        if (i % 5 == 0 && bucket[5]) {
            words.push("Buzz");
        }
        if (i % 7 == 0 && bucket[7]) {
            words.push("Bang");
        }
        if (i % 11 == 0 && bucket[11]) {
            words = ["Bong"];
        }
        if (i % 13 == 0 && bucket[13]) {
            for (let i = 0; i < words.length; i++) {
                if (words[i][0] == 'B') {
                    words.splice(i + 1, 0, "Fezz");
                    break;
                }
            }
        }
        if (words.length == 0) {
            words.push(i);
            num = true;
        }
        if (isTriangle(i) && !num) {
            words = words.map(x => x.replace(x[0], 'T'));
        }
        console.log(i % 17 == 0 ? words.reverse().join("") : words.join(""));
    }
}

function isTriangle(x) {
    return Math.sqrt(8 * x + 1) % 1 == 0;
}

// Call main function
fizzbuzz();
