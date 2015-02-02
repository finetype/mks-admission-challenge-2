$(document).ready(function(){
    /*Algorithm proper*/
    var result = null;
    var findSmallestDifference = function(arr) {
        var differences = [];
        arr.sort(function(a,b){return a - b});
        for(a=0;a<arr.length;a++){
            for(b=a+1;b<arr.length;b++){
                differences[differences.length] = arr[b] - arr[a];
            } 
        }
        var answer = (differences[0] + differences[1])
        for (d=0;d<differences.length;d++){
                if (differences[d] < differences[d+1]) {
                        var bestOfTwo = differences[d]
                        if (bestOfTwo < answer) {
                            answer = bestOfTwo;
                        }
                }
        }
        return answer;
    };
    /*end*/
    /*start jquery*/
    var algArray = [];
    $('#algchalbutton').click(function(){
        var tempvar = null;
        var i=0;
        while(tempvar!=="done"){
            var tempvar = prompt("Enter a positive or negative integer to add to the array of numbers to be compared, or enter \"done\" to finish.");
            if (tempvar == "done"){
                console.log(algArray)
                document.getElementById("answer").innerHTML = "The smallest difference between that group of numbers is " + findSmallestDifference(algArray);
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