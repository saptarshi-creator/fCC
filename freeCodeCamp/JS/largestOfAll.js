function largestOfAll(arr) {
  //arr = [[]]
  let max = []

  for (let array of arr) {
       let _max = array[0]
       for ( let item of array ) {
            if (item > _max) { _max = item }
       }
 
       max.push(_max)
  } 

  return max
}