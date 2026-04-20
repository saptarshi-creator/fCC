function titleCase(str){
  let words= str.split(" ")
  let result=""

  for(let i=0;i<words.length;i++){
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()

    if(i<words.length-1){
      result+=" "
    }
  }
  return result
}
console.log(titleCase("hello world"))