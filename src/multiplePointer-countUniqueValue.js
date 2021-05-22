function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            // put j where i is 
            arr[i] = arr[j]
        }
    }
    // then add 1 to i 
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])