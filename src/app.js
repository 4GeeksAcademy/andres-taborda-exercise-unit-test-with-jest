class IlegalArgumentException extends Error{
    constructor(message) {
        super(message);
    }
}


const fromEuroToDollar = function(valueInEuro) {
    if (typeof valueInEuro !== "number") {
        throw new IlegalArgumentException(`El valor a convertir tipo ${typeof valueInEuro} no es un número valido`)
    }

    if (valueInEuro < 0) {
        throw new IlegalArgumentException("El valor a convertir debe ser un número mayor que cero")
    }

    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDolar) {
    if (typeof valueInDolar !== "number") {
        throw new IlegalArgumentException(`El valor a convertir tipo ${typeof valueInDolar} no es un número valido`)
    }

    if (valueInDolar < 0) {
        throw new IlegalArgumentException("El valor a convertir debe ser un número mayor que cero")
    }

    // Convertimos el valor a yenes
    let valueInYenes = valueInDolar / 156.5;
    // Retornamos el valor en yenes
    return valueInYenes;
}

const fromYenToPound = function(valueInYens) {
    if (typeof valueInYens !== "number") {
        throw new IlegalArgumentException(`El valor a convertir tipo ${typeof valueInYens} no es un número valido`)
    }

    if (valueInYens < 0) {
        throw new IlegalArgumentException("El valor a convertir debe ser un número mayor que cero")
    }

    // Convertimos el valor a yenes   
    let valuePouns = valueInYens / 0.87;
    // Retornamos el valor en yenes
    return valuePouns;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, IlegalArgumentException }