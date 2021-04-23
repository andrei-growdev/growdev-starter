interface Entradas {
   valor1: number,
   valor2: number,
}

interface Resultado {
   resultado: number,
}

class Calculadora {

   somar(entradas: Entradas): Resultado {
      return {
         resultado: entradas.valor1 + entradas.valor2,
      };
   };
}

const calculadora = new Calculadora();
const resultado = calculadora.somar({
   valor1: 10,
   valor2: 20,
});
console.log(resultado.resultado);
