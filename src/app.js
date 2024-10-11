const fromEuroToDollar = function(valueInEuro) {
    if (typeof valueInEuro !== "number") {
        throw new Error("El valor a convertir debe ser un número")
    }

    if (valueInEuro < 0) {
        throw new Error("El valor a convertir debe ser un número mayor que cero")
    }

    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDolar) {
    // Convertimos el valor a yenes
    let valueInYenes = valueInDolar / 156.5;
    // Retornamos el valor en yenes
    return valueInYenes;
}

const fromYenToPound = function(valueInYens) {
    // Convertimos el valor a yenes
    
    let valuePouns = valueInYens / 0.87;
    // Retornamos el valor en yenes
    return valuePouns;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }