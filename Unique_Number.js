//Finding Unique Number Like 5
//Lonely Integer

let arr=[1,2,3,4,3,2,1]

function LonelyInteger(arr){
 arr.sort((a,b)=>a-b)

 var result=0
 console.log(arr)

 for(let i=0;i<arr.length;i++){
 result ^=arr[i]
 }
console.log(result)
 //return result
}

LonelyInteger(arr)

//console.log(LonelyInteger())