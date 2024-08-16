// Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

// . = Carretera
// S = Trineo de Santa
// * = Barrera abierta
// | = Barrera cerrada
// Ejemplo de carretera: S...|....|.....

// Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

// Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
// El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

// Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

// Los elfos se inspiraron en este reto de Code Wars.

// function cyberReindeer(road, time) {
//   let a = road.split('')
//   let c = []
//   const result = []

//   for (let i = 0; i < time; i++) {
//     const element = a[i];

//     for (let index = 0; index < time; index++) {

//       if ((index === i)) {
//         c.push('S')
//         if ((a[index] === '|')) {
//           a[index] = '*'
//         }
//       } else {
//         if (index !== i) {
//           c.push(a[index])
//         }
//       }
//     }
//     if (a[i] === 'S') a[i] = '.'
//     result.push(c.join(''))
//     c = []
//   }

//   return result
// }


function cyberReindeer(road, time) {
  let a = road.split('')
  let c = []
  const result = []
  let b = true
  let barrera = -1
  
  let time2 = time 
  if((a.length -1)>time) time2 = a.length -1
          console.log(time2)

  for (let i = 0 ;  i < time2; i++) {
      console.log(time2)
    if (i === 5)
      for (let index2 = 0; index2 < a.length ; index2++) {
        if (a[index2] === '|') {
          a[index2] = '*'
          if (b) {
            i = barrera 
            barrera = -1
            b = false
            time2 = time2 - (i - 1)
          }
        }
      }

    if (a[i] === '|') { barrera = i }

    if (barrera === -1) {

      for (let index = 0; index < a.length; index++) {
        if (index === i) { c.push('S') } else { c.push(a[index]) }
      }
      result.push(c.join(''))
    } else {
      result.push(result[result.length - 1])
    }

    if (a[i] === 'S') { a[i] = '.' }
    c = []
  }

  return result
}

const road1 = 'S...|...|..';
const time1 = 8;  // Unidades de tiempo
const result1 = cyberReindeer(road1, time1);
console.log(result1);
// Resultado esperado:


const road2 = 'S.|..|...';
const time2 = 7;  // Unidades de tiempo
const result2 = cyberReindeer(road2, time2);
console.log(result2);
// Resultado esperado:

const road3 = 'S.|.|.|.';
const time3 = 12;  // Unidades de tiempo
const result3 = cyberReindeer(road3, time3);
console.log(result3);
// Resultado esperado:

const road4 = 'S|....|....|..';
const time4 = 15;  // Unidades de tiempo
const result4 = cyberReindeer(road4, time4);
console.log(result4);
// Resultado esperado:

const road5 = 'S|..|...|...|...';
const time5 = 20;  // Unidades de tiempo
const result5 = cyberReindeer(road5, time5);
console.log(result5);
// Resultado esperado:

