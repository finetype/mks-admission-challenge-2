$(document).ready(function(){
    /*Modified to be more verbose; for the pure algorithm itself, see "algorithm-challenge-submission.js" in this zip*/
//var linecount = 3;
var findSmallestDifference = function(arr) {
    var differences = [];
    arr.sort(function(a,b){return a - b;});
    $('#theline').before('<hr id="templine"><p id="cal">$> Sorting numbers from greatest to least:</p>');
    $('#theline').before('<p id="cal">$> ' + arr + '</p>');
    $('#theline').before('<p id="cal">$> Determining difference of each pair of closest numbers:</p>');
    var a=0, b=0;
    while(a+1<arr.length){
        b=a+1;
        differences[differences.length] = arr[b] - arr[a];
        $('#theline').before('<p id="cal">$> ' + arr[b] + ' - ' + arr[a] + ' = ' + (arr[b]-arr[a]) + '</p>');
        if(differences[a] === 0){$('#theline').before('<p id="cal">$> Found 0, no smaller possible, aborting.</p>');/*linecount++;*/ return 0;}
        //linecount++
        a++;
    }
    differences.sort(function(a,b){return a - b;});
    return differences[0];
};
    /*UX script*/
    //var clearvar = 0
    $('#algchalbutton').click(function(){
        var algArray = [], tempvar = null, i=0;
        /*clean up old verbose output if run more than once
        if (clearvar > 0){for(a=0;a<linecount;a++){document.getElementById("cal").remove(this);}document.getElementById("templine").remove(this);linecount=3}
        clearvar++
        prompt script*/
        while(tempvar!=="done"){
            tempvar = prompt("Enter a positive or negative integer to add to the array of numbers to be compared, or enter \"done\" to finish.");
            if (tempvar == "done"){
                if (algArray.length<2) {alert("You need to compare at least 2 numbers..."); tempvar = null;}
                else {
                    document.getElementById("answer").innerHTML = "<b>The smallest difference between those numbers is: " + findSmallestDifference(algArray) + "<b>";
                    $('#answer').fadeTo(500,1);
                    $('#answer').fadeTo(500,.1);
                    $('#answer').fadeTo(1000,1);
                }
            }
            else if (tempvar.indexOf(" ") > -1){alert("Please be sure not to enter any spaces in your answer.");}
            else if (isNaN(tempvar)) {
                console.log(typeof tempvar);
                alert("You entered " + tempvar + ", but that's an invalid entry. Only use numerals in your answer, from 0-9, with nothing else, unless exiting with \"done\"");
            }
            else {
                algArray[i] = tempvar;
                i++;
            }
        }
    });
});
/* || "\"done\""*/