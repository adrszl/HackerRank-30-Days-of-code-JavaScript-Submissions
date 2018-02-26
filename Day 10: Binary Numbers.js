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

function main() {
    var n = parseInt(readLine());
    var number = [];
    while(n>0) {
        let x = n % 2;
        n = Math.floor(n / 2);
        number.unshift(x);
    }
    var counter = 0, max = 0;
    for (let i = 0; i < number.length; ++i) {
        if (number[i] == 1) {
            ++counter;
        }
        else {
            if (counter > max) {
                max = counter;
            }
            counter = 0;
        }
    }
    if (counter > max) {
        max = counter;
    }
    console.log(max);
}
