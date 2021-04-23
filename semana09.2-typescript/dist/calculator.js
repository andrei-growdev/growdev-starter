"use strict";
class Calculadora {
    somar(entradas) {
        return {
            resultado: entradas.valor1 + entradas.valor2,
        };
    }
    ;
}
const calculadora = new Calculadora();
const resultado = calculadora.somar({
    valor1: 10,
    valor2: 20,
});
console.log(resultado.resultado);
