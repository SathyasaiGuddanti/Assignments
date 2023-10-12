const numbers = [5,8,9,11,7,6,4,1];

//sorting
numbers.sort(function(a,b){
    return b - a; // for ascending order ---> return a - b;
});
//print sorted array
console.log(numbers);