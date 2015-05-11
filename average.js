var arr=[10,20,30];
var theAverage=function(arr){
  var i=0;
  result=0;
  while(i<arr.length){
    result=result+arr[i];
    console.log(result);
    i++;
  }
  return result/2;
}
console.log(theAverage(arr));
