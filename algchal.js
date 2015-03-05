$(document).ready(function(){

    var findSmallestDifference = function(arr) {
        var i=0, answer = arr[0] + arr[1];
        arr.sort(function(x,y){return x - y;});
        $('#theline').before('<hr id="templine"><p id="cal">$> Sorting numbers from least to greatest:</p>');
        $('#theline').before('<p id="cal">$> ' + arr + '</p>');
        $('#theline').before('<p id="cal">$> Determining difference of each pair of closest numbers:</p>');
        while(i+1<arr.length){
            (arr[i+1] - arr[i]) < answer ? answer = (arr[i+1] - arr[i]) : null;
            $('#theline').before('<p id="cal">$> ' + arr[i+1] + ' - ' + arr[i] + ' = ' + (arr[i+1]-arr[i]) + ", so the current best answer is " + answer+ '</p>');
            if(answer === 0){$('#theline').before('<p id="cal">$> Found 0, no smaller possible, aborting.</p>'); return 0;}
            i++;
        }
        return answer;
    };

    function algChalFunction(){
        
        var rejectArray = [], testArray = $('input[name=algchalnum]').val().replace(/,/g, " ").split(" ");
        testArray.forEach(function(val){if (!$.isNumeric(val)) rejectArray.push(val)});
        testArray = testArray.filter(Number).map(Number);
        testArray1 = testArray.filter(function(val){
            return $.isNumeric(val)
        });
        
        var tempvar = null, i=0;
        if (testArray.length<2) {
            document.getElementById("answer").innerHTML = "<b>Aborted because less than 2 numbers were entered.</b>";
            $('#answer').fadeTo(500,1); $('#answer').fadeTo(500,.1); $('#answer').fadeTo(1000,1);
        }
        else {
            document.getElementById("answer").innerHTML = "<b>The smallest difference between those numbers is: " + findSmallestDifference(testArray1) + "</b><br><br id=\"invalidBelow\">";
            console.log(rejectArray.length)
            //rejectArray = rejectArray.filter(function(val) {return val !== "" || ","});
            if (rejectArray.length > 0) {
                $('#theline').before("<p>$> (Invalid entrie(s): " + rejectArray + ")</p>");
                console.log(rejectArray)
            }
            $('#answer').fadeTo(500,1); $('#answer').fadeTo(500,.1); $('#answer').fadeTo(1000,1);
        }        
    }

    $('#algchalbutton').click(function(){
        algChalFunction();
    });

    document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        algChalFunction();
    }
}

})