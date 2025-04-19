console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)

function adjustLights(lights) {
    let c = 0
    const arr = []

    for (let name of lights) {
        arr.push(name)
    }
    for (let index = 0; index < lights.length; index++) {
        if (lights[index + 1] === undefined) break
        if ((lights[index] === '🟢') && (lights[index + 1] === '🟢' && (lights[index - 1] !== '🟢'))) { c++ } else
            if ((lights[index] === '🔴') && (lights[index + 1] === '🔴') && (lights[index - 1] !== '🔴')) { c++ }
    }
    return c
}
