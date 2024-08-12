// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []

function manufacture(gifts, materials) {
    let result = []
    let m = materials.split('')
    let b = true

    for (let index = 0; index < gifts.length; index++) {
        const element = gifts[index].split('')

        for (let index2 = 0; index2 < element.length; index2++) {
            const element2 = element[index2]
            if (!(m.includes(element2))) {
                b = false
            }
        }
        if (b) {
            result.push(gifts[index])
        }
        b = true
    }

    return result
}

