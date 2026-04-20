function pyramid(pattern,numRows,boolValue){
  let result="\n"
  for(let i=0;i<numRows;i++){
    let spaces= boolValue?i:numRows-(i+1)
    let patterns=boolValue? 2*(numRows-i)-1:2*i+1
    result += " ".repeat(spaces)+ pattern.repeat(patterns)+"\n"
  }
  return result
}
console.log(pyramid("*",5,true))
console.log(pyramid("*",5,false))