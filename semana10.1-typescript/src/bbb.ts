class Participante {
   public nome: string;
   public votos: number = 0
   
   constructor(nome:string) {
      this.nome = nome;
   }
}

const kley = new Participante('Kley');
const levi = new Participante('Levi');
const dani = new Participante('Dani');

class BBB {
   public participantes: Participante[] = [];
   
   adicionarParticipante(participante: Participante): void {
      this.participantes.push(participante);
   } 

   votar(nome:string): void {
      for (const pessoa of this.participantes) {
         if (pessoa.nome === nome) {
            pessoa.votos++;
         }
      }
   }

   exibirResultado() {
      let votosTotais = 0;
      let eliminado: Participante | null = null;

      for (const pessoa of this.participantes) {
         votosTotais += pessoa.votos;
      }

      for (const pessoa of this.participantes) {
         let porcentagem = 0;
         porcentagem = (pessoa.votos * 100) / votosTotais;
         console.log(`${pessoa.nome}: ${porcentagem.toFixed(1)}`);

         if (!eliminado) {
            eliminado = pessoa;
         } else {
            if (pessoa.votos > eliminado.votos) {
               eliminado = pessoa;
            }
         }
      }

      console.log(`O participante eliminado é: ${eliminado?.nome}`);
   }
}

const bbb = new BBB();
bbb.adicionarParticipante(kley);
bbb.adicionarParticipante(levi);
bbb.adicionarParticipante(dani);

for (let i = 0; i < 3; i++) {
   bbb.votar('Kley');
}
for (let i = 0; i < 5; i++) {
   bbb.votar('Levi');
}
for (let i = 0; i < 4; i++) {
   bbb.votar('Dani');
}

bbb.exibirResultado();