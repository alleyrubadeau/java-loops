var arr=[10,10,10]

var subtract=function(arr){
  i=0;
  result=0;
  while(i<arr.length){
    result=result-arr[i];
    console.log(result);
    i++;

    }
    return result;
  };
  console.log(subtract(arr));
