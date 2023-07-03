// Main function
function fizzbuzz() {
    console.log("Hello, world!")

    
    for (let i = 1; i <= 150; i++) {
        var words = [];
        if (i % 3 == 0) {
            words.push("Fizz");
        }
        if (i % 5 == 0) {
            words.push("Buzz");
        }
        if (i % 7 == 0) {
            words.push("Bang");
        }
        if (i % 11 == 0) {
            words = ["Bong"];
        }
        if (i % 13 == 0) {
            for (let i = 0; i < words.length; i++) {
                if (words[i][0] == 'B') {
                    words[i] = "Fezz" + words[i];
                    break;
                }
            }
        }
        if (words.length == 0) {
            words.push(i);
        }

        console.log(i % 17 == 0 ? words.reverse().join("") : words.join(""));
    }
}

// Call main function
fizzbuzz();
