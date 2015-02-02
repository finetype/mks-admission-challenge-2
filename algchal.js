$(document).ready(function(){
    /*Algorithm proper*/
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
    //var result = findSmallestDifference([1829,10,100,1000,10000]);
    //console.log(result);
    /*end*/
    document.getElementById("bake-one").innerHTML = "derp";
})