console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null

function getIndexsForPalindrome(word) {
    const s = word.split('')
    let r = []

    for (let index = 0; index < s.length/2; index++) {
        for (let index2 = s.length/2; index2 < s.length; index2--) {
            if (s[index] !== s[index2]) {
                r=null
                break
            }
        }
    }

    return r
  }