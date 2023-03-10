/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

BONUS
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

const bici = [
  {
    nome: 'Bianchi',
    peso: 60
  },
   {
    nome: 'Atala',
    peso: 30
  },
   {
    nome: 'Olmo',
    peso: 40
  },
]


let pesoMinore = bici[0].peso;

bici.forEach(element =>{

  if(element.peso < pesoMinore){
    pesoMinore = element.peso;
  }
});

console.log('peso minore: ' + pesoMinore);

const{nome, peso} = bici[1];

console.log(`La bici ${nome} pesa ${peso}kg e quindi è la più leggera`);

const risultatoDom = document.getElementById('risultato');

risultatoDom.innerHTML = `La bici ${nome} pesa ${peso}kg e quindi è la più leggera.`;



//PROVA CON NUMERI
/*
const numeri = [7,9,4,1,2];

let result = numeri[0];

numeri.forEach(element =>{

  if(element < result){
    result = element;
  }
});

console.log('smallest number: ' + result);
*/


