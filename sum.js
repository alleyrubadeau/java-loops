var sum=function(arr) {
  i=0;
  result=0;
  while(i<arr.length){
    result=result+arr[i];
    console.log(result);
    i++;
  }

  return result;

}

var arr=[1,2,3]
console.log(sum(arr));
