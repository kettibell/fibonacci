
// document.write('<h1>Hello World</h1>');
const n = parseInt(prompt('Enter n'));

function fibonacciOne(n) {
document.write('<h1>1) First option (for):</h1>');
document.write('Fibonacci numbers: <br>')
let fib = [];
    fib[0] = 0;
    fib[1] = 1;
for (let i = 0; i <= n - 1; i++) {

    fib[i + 2] = fib[i] + fib[i + 1]; 
    fib[n] = fib[i];
    document.write(fib[i] + '<br>');
}
return '<h1>' + n + ' element is: ' + fib[n] + '</h1>';
}
//document.write('1) <h1>' + n + ' element is: </h1>' + fib[n]);

document.write(fibonacciOne(n));



