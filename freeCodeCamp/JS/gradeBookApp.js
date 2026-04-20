function getAverage(arr) {
  if(arr.length===0){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
function getGrade(score){
  if(score==100){
    return "A+"
  }
  else if(score>=90){
    return "A"
  }
  else if(score>=80){
    return "B"
  }
  else if(score>=70){
    return "C"
  }
  else if(score>=60){
    return "D"
  }
  else{
    return "F"
  } 
}
function hasPassingGrade(score){
  let grade= getGrade(score)
  if(grade!="F"){
    return true
  }
  else{
    return false
  }
}
function studentMsg(arr, score) {
  const passFailMsg = hasPassingGrade(score) ? "You passed the course." : "You failed the course.";
  return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. ${passFailMsg}`;
}

