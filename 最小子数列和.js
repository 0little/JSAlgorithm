var len = 8, arr = [-2, 6, -1, -5, 4, -7, -2, 3]
  var min = arr[0]
  for(var i = 1; i < len; i++) {
    if(arr[i-1] < 0) arr[i] += arr[i-1]
    if(arr[i] < min) min = arr[i]
  }

console.log(min)
