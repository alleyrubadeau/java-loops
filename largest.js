var arr=[1,9,7]

var largest=function(arr){
var i=0;
var result=arr[0];
  while(i>arr.length){
    if (arr[0]>result){
      result=arr[i];
      }
    i++;
  }
};
  var theAnswer=largest([1,9,7]);
  console.log(theAnswer);
