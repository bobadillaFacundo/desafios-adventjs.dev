function createChristmasTree(ornaments, height) {
    let s = ornaments.split('')
    let r = ''
    let t = height - 1
    for (let index = 1; index < height + 1; index++) {
        for (let index2 = 0; index2 < index; index2++) {
            if (index2 === 0) {
                for (let index = 0; index < t; index++) {
                    r += ' '
                }
                r += s[index2]
            } else {
                r += ' '
                r += s[(index2 % s.length)]
            }
        }
        r += '\n'
        t--
    }
    for (let index = 0; index < height - 1; index++) {
        r += ' '
    }
    r += '|'

    return r
}
console.log(createChristmasTree('123', 4))