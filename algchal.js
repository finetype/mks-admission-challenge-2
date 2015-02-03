$(document).ready(function(){
    /*Modified to be more verbose*/
    var result;
    var findSmallestDifference = function(arr) {
        var differences = [];
        arr.sort(function(a,b){return a - b});
        $('#theline').before('<hr><p>$> sorting numbers from greatest to least:</p>')
        $('#theline').before('<p>$> ' + arr + '</p>')
        var a=0, b=0;
        while(a+1<arr.length){
            b=a+1
            differences[differences.length] = arr[b] - arr[a];
            $('#theline').before('<p>$> ' + arr[b] + ' - ' + arr[a] + ' = ' + (arr[b]-arr[a]) + '</p>')
            a++
        }
        differences.sort(function(a,b){return a - b})
        $('#theline').before('<p>$> so our sorted list of possible answers contains: ' + differences + '</p>')
        console.log(differences)
        var answer = (differences[0] + differences[1])
        if (differences.length<2){return differences[0]}
        else{
            for (d=0;d+1<differences.length;d++){
                    if (differences[d] < differences[d+1]) {
                            var bestOfTwo = differences[d]
                            if (bestOfTwo < answer) {
                                answer = bestOfTwo;
                            }
                    }
            }
            return answer;
        }
    };
    /*start jquery*/
    var algArray = [];
    $('#algchalbutton').click(function(){

        var tempvar = null;
        var i=0;
        while(tempvar!=="done"){
            var tempvar = prompt("Enter a positive or negative integer to add to the array of numbers to be compared, or enter \"done\" to finish.");
            if (tempvar == "done"){
                if (algArray.length<2) {alert("You need to compare at least 2 numbers..."); tempvar = null}
                else {
                    document.getElementById("answer").innerHTML = "<b>The smallest difference between those numbers is: " + findSmallestDifference(algArray) + "<b>";
                    $('#answer').fadeTo(500,1)
                    $('#answer').fadeTo(500,.1)
                    $('#answer').fadeTo(1000,1)
                }
            }
            else if (isNaN(tempvar)) {
                console.log(typeof tempvar)
                alert("that's an invalid entry. Only use numerals in your answer, from 0-9, with nothing else, unless exiting with \"done\"")
            }
            else {
            algArray[i] = tempvar;
            i++
            };
        }
    })
})
/* || "\"done\""*/