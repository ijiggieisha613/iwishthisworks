// Perform arithmetic operations
const num1 = 10;
const num2 = 5;
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

// Display the results in the HTML
document.getElementById('result').innerHTML = `
    Sum: 10+5 = ${sum} <br>
    Difference: 10-5 = ${difference} <br>
    Product: 5*10 = ${product} <br>
    Quotient: 10/5 = ${quotient}
`;