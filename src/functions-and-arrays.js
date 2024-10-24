// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
   if (num1 > num2){
        return num1;
   }
   else if (num1 < num2){
        return num2;
   }
   else{
         return num1;
   }

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {
    let indexOfLongest = -1 ;
    let lengthOfLongest = 0 ;
    for(i=0 ; i < arr.length ; i++ ){
        if(arr[i].length > lengthOfLongest){
            lengthOfLongest = arr[i].length
            indexOfLongest = i
        }   
    }

    if (indexOfLongest === -1){
        return null ;
    }
    else {
        return arr[indexOfLongest];
    }
    
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
 let accum = 0 ;
 for(i=0 ; i < arr.length ; i++ ){
    accum += arr[i]
 }
return accum;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
 if (arr.length !== 0 && Array.isArray(arr) ) {
    return sumNumbers(arr) / arr.length;
 }
 else {
    return 0 ; 
 }
    

}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr, word) {
    let isExists = false ;
    if (arr.length !== 0 && Array.isArray(arr) ) {
        for(i=0; i < arr.length ; i++) {
            if( arr[i] === word ){ 
                isExists = true ;
                break ;
            }    
        }
        
     }
     else {
        isExists =  null ; 
     }
     return isExists;
}



// arr.forEach((item,word)=>{ if (item === word) { isExists = true; } else { isExists = false; } } )
