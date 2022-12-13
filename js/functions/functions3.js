/* Funções com valor padrão (default)
 * Estratégia #1 (versão < ES2015)
 */
function sum1(a, b, c) {
    // console.log(arguments)

    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log('#1: ', sum1(), sum1(2), sum1(2, 3, 4), sum1(0, 0, 0))

/* Funções com valor padrão (default)
 * Estratégia #2 (versão < ES2015)
 */
function sum2(a, b, c) {
    // console.log(arguments)

    a = (a !== undefined) ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log('#2: ', sum2(), sum2(2), sum2(2, 3, 4), sum2(0, 0, 0))

/* Funções com valor padrão (default)
 * Estratégia #3 (versão >= ES2015)
 */
function sum3(a = 1, b = 1, c = 1) {
    // console.log(arguments)

    return a + b + c
}

console.log('#3: ', sum3(), sum3(2), sum3(2, 3, 4), sum3(0, 0, 0))
