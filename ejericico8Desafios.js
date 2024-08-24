function separateLettersAndNumbers(str) {
  const regex = /(\d+)([a-zA-Z])/g;
  let result = [];
  let match;

  while ((match = regex.exec(str)) !== null) {
    result.push({ letter: match[2], number: parseInt(match[1], 10) });
  }

  return result;
}

function organizeGifts(gifts) {
    let g = separateLettersAndNumbers(gifts)
    let result = []
    
    for (var prop in g) {
      const r = g[prop].number
      
    }
    
    
    return ''
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)