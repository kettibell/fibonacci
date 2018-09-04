// document.write('<h1>Hello World</h1>');
const n = parseInt(prompt('Enter n'));

function fibonacciFor(n) {
    document.write('<h1>1) First option (for):</h1>');
    document.write('Fibonacci numbers: <br>')
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    for (let i = 0; i <= n - 1; i++) {
        fib[i + 2] = fib[i] + fib[i + 1];
        fib[n] = fib[i];
        document.write(fib[i] + '<br>');
    }
    return '<h1>' + n + ' element is: ' + fib[n] + '</h1>';
}
document.write(fibonacciFor(n));

function fibonacciWhile(n) {
    document.write('<h1>2) Second option (while):</h1>');
    document.write('Fibonacci numbers: <br>')
    let i = 0;
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    while (i < n) {
        fib[i + 2] = fib[i] + fib[i + 1];
        fib[n] = fib[i];
        document.write(fib[i] + '<br>');
        i++;
    }
    return '<h1>' + n + ' element is: ' + fib[n] + '</h1>';
}
document.write(fibonacciWhile(n));

function fibonacciDoWhile(n) {
    document.write('<h1>3) Third option (do while):</h1>');
    document.write('Fibonacci numbers: <br>')
    let i = 0;
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    do {
        fib[i + 2] = fib[i] + fib[i + 1];
        fib[n] = fib[i];
        document.write(fib[i] + '<br>');
        i++;
    } while (i < n);
    return '<h1>' + n + ' element is: ' + fib[n] + '</h1>';
}
document.write(fibonacciDoWhile(n));

let fib = 1;
function fibonacciRec(n) {
    if (n >= 3) {
        return fibonacciRec(n - 1) + fibonacciRec(n - 2);
    } return fib;
}
document.write('<h1>4) Firth option (Recursion):</h1>');
document.write('<h1>' + n + ' element is: ' + fibonacciRec(n) + '</h1>');