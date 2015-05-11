var arr=[19,20,40]

var smallest=function(arr){
  var i=0;
  var result=arr[0];
  while(i<arr.length){
    if(arr[i]<result){
      result=arr[1];
    }
    i++;
  }
  return result;
};
var theSmallest=smallest(arr);
console.log(theSmallest);
