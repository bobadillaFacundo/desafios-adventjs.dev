function drawGift(size, symbol) {

  let result = []
  let result2 = []
    
  for (let x = 0; x < size; x++) {
   for (let y = 0; y < size*2; y++) {
     if (y<size-x) result.push('-')
     if (y>size-x) result.push('#')
     if (y===2*size-1) result.push('#\n')
  } 
  }
    result.pop()
    for (let x = 0; x < size; x++) {
    for (let y = 0; y < size * 2; y++) {
if (y<x) result.push('-')
     if (y>x) result.push('#') 
         if (x===y) result.push('\n')
    
    }
  }
  return result.join('')
}

console.log(drawGift(4,'+'))