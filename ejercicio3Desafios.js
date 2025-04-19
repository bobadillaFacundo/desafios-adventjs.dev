// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
findNaughtyStep(original2, modified2) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
findNaughtyStep(original3, modified3) // ''
// A tener en cuenta:

// Siempre habrá un paso de diferencia o ninguno.
// La modificación puede ocurrir en cualquier lugar de la cadena.
// La secuencia original puede estar vacía

function findNaughtyStep(original, modified) {
    // Si original es vacío y modified no lo es, devuelve el primer carácter de modified
    if (original === '') {
        return modified.length > 0 ? modified[0] : '';
    }
    
    // Si modified es vacío y original no lo es, devuelve el primer carácter de original
    if (modified === '') {
        return original.length > 0 ? original[0] : '';
    }

    let result = ''
    let m = modified.split('')
    let o = original.split('')
    
    //para cadenas del mismo tamaño
    if (m.length === o.length) {

        for (let index = 0; index < o.length; index++) {
            const element = o[index]
            const element2 = m[index]
            if (element !== element2) {
                result = element2
                break
            }

        }
    }
    //para cadenas de diferente tamaño

    if (m.length > o.length) {

        for (let index = 0; index < o.length; index++) {
            const element = o[index]
            const element2 = m[index]
            if (element !== element2) {
                result = element2
                break
            }
            if (element !== m[m.length - 1]) {
                result = m[m.length - 1]

            }
        }
    }


    if (m.length < o.length) {

        for (let index = 0; index < m.length; index++) {
            const element = o[index]
            const element2 = m[index]
            if (element !== element2) {
                result = element
                break
            }
            if (element !== o[o.length - 1]) {
                result = o[o.length - 1]

            }
        }
    }

    return result
}



//chatgpt

// function findNaughtyStep(original, modified) {
//     // Comprobación para cadenas de diferente tamaño
//     const maxLength = Math.max(original.length, modified.length);

//     for (let i = 0; i < maxLength; i++) {
//         // Si un carácter en una posición no coincide o una cadena es más corta
//         if (original[i] !== modified[i]) {
//             // Si modified es más larga, devolvemos el carácter extra
//             if (modified.length > original.length) {
//                 return modified[i];
//             }
//             // Si original es más larga, devolvemos el carácter eliminado
//             else if (modified.length < original.length) {
//                 return original[i];
//             }
//             // Si son del mismo tamaño pero difieren en un carácter
//             else {
//                 return modified[i];
//             }
//         }
//     }
//     // Si no hay diferencias, devolvemos una cadena vacía
//     return '';
// }