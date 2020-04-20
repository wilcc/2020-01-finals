const makeRunOn = function(str){
  let newStr = ''
for(let i=0; i < str.length; i++){
  if(str[i]==='.'){
    newStr += ','
  }
  else newStr+=str[i]
}
  if(newStr.endsWith(',')){
    return newStr.slice(0,newStr.length-1)+'.'
  }
return newStr
}
const stringOut = function(str){
  let noSpace = ''
  for(const word of str){
  if (word!==' '){
    noSpace+=word
  }
}
const newStr = noSpace.split('').join(' ')

return newStr
}

const nightOwls = function(people){
  return people.filter(function(person){
    return person.localTime>=100 && person.localTime<=400 && person.asleep===false
  })

}

const totalScore = function(array){
  let result = 0
  for(const obj of array){
    if(obj.multiplier === undefined){
      obj.multiplier = 1
    }
   result += obj.score * obj.multiplier
  }return result
}

const getToBed = function(original){
// const people2 = [...original]
// for(const person of people2){
//   if(person.localTime >=100&& person.localTime<=400 && person.asleep===false){
//     person.asleep = true
//   }
// }return people2
// const people2 = original.map(person=>{
//   const {name,localTime}=person
//   if(person.localTime >=100&& person.localTime<=400 && person.asleep===false){
//     {name,localTime,asleep=true}
//   }else return person
// }
// )
//   return people2
const newPeople = function (name,localTime,asleep){
  const people={
    name,
    localTime,
    asleep
  }
  return people
}
const makeSleep = function(people){
  const asleepPeople = newPeople(people.name,people.localTime,people.asleep)
  if (asleepPeople.localTime >=100&& asleepPeople.localTime <=400 && asleepPeople.asleep ===false){
    asleepPeople.asleep=true
  }return asleepPeople
}
return original.map(makeSleep)
}

const findIndices = function(num,func){
let result = []
for(let i = 0; i< num.length;i++){
  if(func(num[i])){
    result.push(i)
  }
}
return result

}
const Faqtory = () => {
  return{
    questions:[],
    length:0,
    addQuestion:function(ques){
      this.questions.push(
        {
          text:ques,
          id:this.length,
          answered:false,
        }
        )
        this.length++
    },
    answerQuestion:function(id,ans){
      if(this.questions[id].answered === false){
        this.questions[id].answer = ans
        this.questions[id].answered = true
      }
    },
  }

}




if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
