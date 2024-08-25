console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null

function getIndexsForPalindrome(word) {
    const s = word.split('')
    const t = s.length / 2
    let p = s.length - 1
    let r = ''
    let c = 0
    let f = 0
    let b = true

    for (let index = 0; index < t; index++) {

        if (s[index] !== s[p]) {
            for (let index2 = 0; index2 < t + 1; index2++) {
                f = s[index2]
                if ((f === s[p])) {
                    if (r === '')
                        r = [index, index2]
                    s[index] = f
                    c++
                }
            }
        }
        p--
    }
    if (c > 2) { return null }
    if (r === '') { return [] } else return r
}


// Ejemplos donde tu código falla
console.log(getIndexsForPalindrome('racecar')); // Debería ser []
console.log(getIndexsForPalindrome('abcdba')); // Debería ser [2,3]
console.log(getIndexsForPalindrome('abcda')); // Debería ser [1,3]
console.log(getIndexsForPalindrome('abccba')); // Debería ser []
console.log(getIndexsForPalindrome('abccxaa')); // null
console.log(getIndexsForPalindrome('abcba')); // []
console.log(getIndexsForPalindrome('aacdaa')); // [2, 3] 
