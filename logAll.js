var arr=[1,2,3,4,5]

var logAll=function(arr){
  i=0;
  result=0;
  while(i<arr.length){
    result=i;
    console.log(result);
    i++;
  }
  return result;

}
console.log(logAll(arr));
