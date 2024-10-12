describe('fromEuroToDollar', () => { 
    test("One euro should be 1.07 dollars", function() {
        
        const { fromEuroToDollar } = require('./app.js');
    
        const dollars = fromEuroToDollar(3.5);
    
        const expected = 3.5 * 1.07;
    
        expect(dollars).toBe(expected); 
    })

    test("The function Should be different to undefined or null", function() {
        
        const { fromEuroToDollar } = require('./app.js');
        
        expect(fromEuroToDollar).not.toBeFalsy(); 
        
    })

    test("The function argument is a number", function() {
        
        const { fromEuroToDollar } = require('./app.js');
    
        
        const expected = /El valor a convertir tipo [\w]+ no es un número valido/;
        
        expect(() => fromEuroToDollar("s")).toThrow(expected); 
        expect(() => fromEuroToDollar()).toThrow(expected); 
        expect(() => fromEuroToDollar(null)).toThrow(expected); 
        
    })

    test("The function argument is a number greater than zero", function() {
        
        const { fromEuroToDollar } = require('./app.js');
    
        const expected = "El valor a convertir debe ser un número mayor que cero";

        expect(() => fromEuroToDollar(-2)).toThrow(expected); 
        
    })

    test("The exception is type of IlegalArgumentException.class", function() {
        
        const { fromEuroToDollar, IlegalArgumentException } = require('./app.js');

        expect(() => fromEuroToDollar(-2)).toThrow(IlegalArgumentException); 
        
    })

    // test("The value to be converted should not be null or undefined", function() {
        
    //     const { fromEuroToDollar, IlegalArgumentException } = require('./app.js');

    //     const expected = "El valor a convertir debe ser un número valido";

    //     expect(() => fromEuroToDollar(null)).toThrow(expected); 
    //     expect(() => fromEuroToDollar(undefined)).toThrow(expected); 
    //     expect(() => fromEuroToDollar()).toThrow(expected); 
        
    // })
});

describe('fromDollarToYen', () => {
    test("One dolar should be 146,26 yens", function() {
        
        const { fromDollarToYen } = require('./app.js');
        
        const yenes = fromDollarToYen(1);
    
        const expected = 1 / 156.5;
    
        expect(yenes).toBe(expected); 
    })
});

describe('fromYenToPound', () =>{
    test("One yen should be 179,88 pounds", function() {
        
        const { fromYenToPound } = require('./app.js');
    
        const pounds = fromYenToPound(1);
          
        const expected = 1 / 0.87;
    
        expect(pounds).toBe(expected); 
    })
})

