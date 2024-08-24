function maxDistance(movements) {
  let a = movements.split('')
  let c = 0
  
  for (let i = 0; i < a.length; i++) {
    
    if(a[i]==='<') { c -= 1 } else { c += 1 }
    
  }
  return Math.abs(c)
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

const movements4 = '<<*>>';
console.log(maxDistance(movements4)); // -> 1

const movements5 = '>**<';
console.log(maxDistance(movements5)); // -> 2

const movements6 = '<<*<*>>';
console.log(maxDistance(movements6)); // -> 2


