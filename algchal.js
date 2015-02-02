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
    //document.getElementById("bake-one").innerHTML = "derp";
    var algArray = [];

    $('#algchalbutton').click(function(){
        console.log('clicked')
        var tempvar = null;
        var i=0;
        while(tempvar!=="quit"){
            var tempvar = prompt("Enter a positive or negative integer to add to the array of numbers to be compared, or enter \"quit\" to finish.");
            if (tempvar == "quit"){
                document.getElementById("answer").innerHTML = "The smallest difference between that group of numbers is " + findSmallestDifference(algArray);
            }
            else {
            algArray[i] = tempvar;
            console.log(algArray)
            i++
            };
        }
    })

    /*test, runs the code on page load
    var tempvar = null, i = 0;

        while (tempvar!=="quit"){
            console.log("forloop");
            i++
            var tempvar = prompt("Enter a positive or negative integer to add to the array of numbers to be compared, or enter \"quit\" to finish.");
            if (tempvar == "quit"){
                findSmallestDifference(algArray);
                document.getElementById("answer").innerHTML = result;
            }
            else {
            algArray[i] = tempvar;
            };
        };
        */
})