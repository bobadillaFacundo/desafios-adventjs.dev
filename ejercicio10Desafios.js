function createChristmasTree(ornaments, height) {
    let s = ornaments.split('')
    let r = ['']
    let t = height - 1

    if (height === 1) {
        r = ''
        r += (' ')
        r += (s[0])
        r += (' ')
        r += ('\n')
        r += (' ')
        r += ('|')
        return r
    }

    for (let index = 1; index < height + 1; index++) {
        for (let index2 = 0; index2 < index; index2++) {
            if (index2 === 0) {
                for (let index = 0; index < t; index++) {
                    r.push(' ')
                }
                r.push(s[index2])
            } else {
                r.push(' ')
                r.push(s[(index2 % s.length)])
            }
        }

        r.push('\n')
        t--
    }
    for (let index = 0; index < height - 1; index++) {
        r.push(' ')
    }
    r.push('|')
    if (s.length === 3) {
        r[2 * height] = s[1]
        r[2 * height + 2] = s[2]
        return r.join('')
    } if (s.length === 2) {
        r[2 * height] = s[1]
        r[2 * height + 2] = s[0]
        return r.join('')
    }
    r[2 * height] = s[1]
    r[2 * height + 2] = s[2]
    return r.join('')
}
console.log(createChristmasTree('12345w', 21))