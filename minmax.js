function miniMaxSum(arr) {
    
    arr.sort((a,b)=>a-b)
    
    var minSum=arr.slice(0,arr.length-1).reduce((sum,cum)=>sum+cum,0);
    var maxSum=arr.slice(1).reduce((sum,cum)=>sum+cum,0)
    
    console.log(minSum+' '+maxSum)
   
}
var arr=[2,3,4,1,5]
miniMaxSum(arr)