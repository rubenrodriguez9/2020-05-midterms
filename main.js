function capitalizeSentences(str){
  let result = '';
  for(let i = 0;i < str.length;i++){
    let spaceInd = str.indexOf('.');

    if(i === 0){
      result = result + str[0].toUpperCase()
    }else if(str[i - 2]=== '.'){
      result = result + str[i].toUpperCase()
    }else result = result +str[i].toLowerCase()


  }
return result
}


function isValidPassword(str){
  for(let i = 0;i < str.length;i++){
    if (str[i] !== ' '){
      return false

    }else if(str.length < 12){
      return false
    }else if(str.length >11 && str[i] === ' '){
      return false
    }else if(str[i] !== ' '){
      return false
    }else if(str.length > 11) {true}
    
    
  }
return result
}

function makeHalfSquares(arr){
  let result = []
  for(let i = 0;i < arr.length;i++){
    result.push((arr[i] * arr[i]) / 2)
  }
  return result
}

function countAs(arr){
  let result = []
  for(let i = 0;i < arr.length;i++){
    if(arr[i] > 89){
      result.push(arr[i])
    }
  }
  return result.length
}

function deleteMiddleLetters(str){
  let result = ''
  let middleChar = str.length /2;
  for(let i = 0;i < str.length;i++){
    if(str.length % 2 === 0){
      i = i +1
    }else result = result + str[i]
    
  }
  return result
}


function lastIndexOfSpace(str){
  if(str.indexOf(' ') === -1){
    return -1
  }else return str.lastIndexOf(' ')
}

function hyphenateName(str){
  let ns =''
  let lastSpace = str.lastIndexOf(' ')
  for(let i = 0;i < str.length;i++){
    if(i === lastSpace){
      ns= ns + '-'
    }else ns = ns+str[i]
  }
  return ns
}


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
