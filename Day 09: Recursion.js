process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
var result = 1;

function factorial(n) {
    // Complete this function
    if (n == 1) {
        return result;
    }
    else {
        result *= n;
        return factorial(--n);
    }
}

function main() {
    var n = parseInt(readLine());
    var result = factorial(n);
    process.stdout.write("" + result + "\n");

}
