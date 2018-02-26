function processData(input) {
    var m = input.split("\n")
    var even = "", odd = "";
    for (var i = 1; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++){
            if (j%2 == 0){
                even = even + m[i][j];
            } else {
                odd = odd + m[i][j];
            }
        }
        console.log(even + " " + odd);
        even = "", odd = "";
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
