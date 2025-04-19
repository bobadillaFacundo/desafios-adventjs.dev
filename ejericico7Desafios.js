function drawGift(size, symbol) {

  let result = []
  let result2 = []

  for (let x = 1; x < size; x++) {
    for (let y = 0; y < size * 2; y++) {
      if (y < size - x) result.push(['-'])
      if (y > size - x) result.push(['#'])
      if (y === (2 * size) - 1) result.push(['\n'])
    }
  }
  result.pop()

  // for (let x = 0; x < size; x++) {
  //   for (let y = 0; y < size * 2; y++) {
  //     if (x === y) result[x].push('\n')
  //     if (y < x) result[x].push('-')
  //     if (y > x) {
  //       result[x].push('#')
  //     }

  //   }
  // }

  // for (let x = 1; x < (size * 2) - 1; x++) {
  //   for (let y = 0; y < (size * 2) - 1; y++) {
  //     if (x < (((size * 2) - 1) * (size - 2))) {
  //       for (let i = 0; i < size - 2; i++) {
  //         result[(((size * 2) - 1) * (size - 2)) - x] = symbol
  //       }
  //     }
  //   }
  // }

  return result
}

console.log(drawGift(5, '+'))