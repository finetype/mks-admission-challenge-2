$(document).ready(function(){
    /*Modified to be more verbose; for the pure algorithm itself, see "algorithm-challenge-submission.js" in this zip*/
//var linecount = 3;
var findSmallestDifference = function(arr) {
    var differences = [], i=0;
    arr.sort(function(x,y){return x - y;});
    $('#theline').before('<hr id="templine"><p id="cal">$> Sorting numbers from greatest to least:</p>');
    $('#theline').before('<p id="cal">$> ' + arr + '</p>');
    $('#theline').before('<p id="cal">$> Determining difference of each pair of closest numbers:</p>');
    while(i+1<arr.length){
        differences[i] = arr[i+1] - arr[i];
        $('#theline').before('<p id="cal">$> ' + arr[i+1] + ' - ' + arr[i] + ' = ' + (arr[i+1]-arr[i]) + '</p>');
        if(differences[i] === 0){$('#theline').before('<p id="cal">$> Found 0, no smaller possible, aborting.</p>');/*linecount++;*/ return 0;}
        //linecount++
        i++;
    }
    differences.sort(function(x,y){return x - y;});
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
        while(tempvar!==""){
            tempvar = prompt("Enter a positive or negative integer to add to the array of numbers to be compared, or enter with the field blank to finish.");
            if (tempvar == ""){
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