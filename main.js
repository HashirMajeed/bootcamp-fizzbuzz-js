// Main function
function fizzbuzz() {
    console.log("Hello, world!")

    // Code goes here...
    for (let i = 1; i <= 100; i++) {
        var result = "";
        if (i % 3 == 0) {
            result += "Fizz";
        }
        if (i % 5 == 0) {
            result += "Buzz";
        }
        if (result == "") {
            result = i;
        }

        console.log(result);
    }
}

// Call main function
fizzbuzz();
