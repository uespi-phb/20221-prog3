
/* Manipulação de funções com parâmetros variáveis
 * antes do ES2015
 */
function sum() {
    let sum = 0

    for (i in arguments) {
        sum += arguments[i]
    }

    return sum
}

console.log(sum())
console.log(sum(1))
console.log(sum(1, 2))
console.log(sum(1, 2, 3))

console.log(sum(1, 2, 'zzz'))
console.log(sum('x', 'y', 'z'))
