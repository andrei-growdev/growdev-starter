//#1
for (let i = 5; i <= 25; i++) {
   // console.log(i);
}

//# 2
for (let i = 10; i >= 1; i--) {
   // console.log(i);
}

//#3
for (let i = 1; i <= 10; i++) {
   // console.log(`${i}x6 = ${i*6}`);
}

//#4
const meses = ['Janeiro', 'Fevereiro','Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto','Setembro', 'Outubro', 'Novembro', 'Dezembro'];
// console.log(meses[0]);
// console.log(meses[meses.length-1]);

//#5
for (let i = meses.length-1; i >= 0; i--) {
   // console.log(meses[i]);
}

//#6
const notas = [];
for (let i = 1; i <= 10; i++) {
   notas.push((i * 8) +3);
}
// console.log(notas);

//#7
let total = 0;
for (const nota of notas) {
   total += nota;
}
const media = total / notas.length;
// console.log(media);

//#8
let iterator = 1;
let arrayInteiros = [];
while (iterator <= 10) {
   arrayInteiros.push(iterator);
   iterator++;
}
console.log(arrayInteiros);