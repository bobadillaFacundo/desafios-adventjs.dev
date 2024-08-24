function cyberReindeer(road, time) {
  let roadArray = road.split('');
  const result = [];
  let sleighPosition = 0;
  const barrierOpenTime = 5;

  // Iterar sobre el tiempo
  for (let t = 0; t < time; t++) {
            if (roadArray[t] === 'S') { roadArray[t] = '.' }

    // Crear una copia del estado actual de la carretera
    let currentState = roadArray.slice();
    currentState[sleighPosition] = 'S'; // Colocar el trineo en la posición actual
    result.push(currentState.join(''));

    // Si es el momento de abrir las barreras, actualizamos la carretera
    if (t === barrierOpenTime - 1) {
      for (let i = 0; i < roadArray.length; i++) {
        if (roadArray[i] === '|') {
          roadArray[i] = '*'; // Cambiar barrera cerrada a abierta
        }
      }
    }

    // Avanzar el trineo
    if (sleighPosition < roadArray.length - 1) {
      if (roadArray[sleighPosition + 1] === '|') {
        // Si hay una barrera cerrada, el trineo se detiene en esta posición
        continue;
      }
      sleighPosition++; // Mover el trineo si no hay barrera cerrada
    }

  }

  return result;
}

// Ejemplos de uso:

const road1 = 'S..|...|..';
const time1 = 10;
console.log(cyberReindeer(road1, time1));
/* Salida esperada:
[
  'S..|...|..',
  '.S.|...|..',
  '..S|...|..',
  '..S|...|..',
  '..S|...|..',
  '...S...*..',
  '...*S..*..',
  '...*.S.*..',
  '...*..S..',
  '...*...S.'
]
*/

const road2 = 'S......';
const time2 = 5;
console.log(cyberReindeer(road2, time2));

const road3 = 'S|*|*|*|';
const time3 = 6;
console.log(cyberReindeer(road3, time3));


const road4 = 'S...|...|...';
const time4 = 7;
console.log(cyberReindeer(road4, time4));


const road5 = 'S|..|..|..';
const time5 = 10;
console.log(cyberReindeer(road5, time5));


const road6 = 'S.....|||';
const time6 = 8;
console.log(cyberReindeer(road6, time6));


const road7 = 'S|.....';
const time7 = 4;
console.log(cyberReindeer(road7, time7));


const road8 = 'S*|*|*|';
const time8 = 5;
console.log(cyberReindeer(road8, time8));

