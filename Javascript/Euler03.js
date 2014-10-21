
/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
*/

var isPrime = function(input) {
    for (var i = 2; i < input; i++) {
        if (input % i === 0) {
            return false;
        }
    }
    return true;
};

var maxPrimeFactor = function(input) {
    var divisor = input - 1;
    while (divisor > 1) {
        if (input % divisor === 0 && isPrime(divisor)) {
            return divisor;
        }
        divisor--;
    }
    return input;
}

var num = prompt("Please enter a whole number.");
document.write("<br>Number Chosen: " + num);

var start = new Date().getTime();
document.write("<br>Max prime factor: " + maxPrimeFactor(num));

var end = new Date().getTime();
document.write("<br>Runtime: " + (end = start) + "ms");