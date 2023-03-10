/*

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

const squadreSpagnole = [
  {
    'nome': 'Barcellona',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Real Madrid',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Atletico Madrid',
    'punti fatti': 0,
    'falli subiti': 0
  },
  {
    'nome': 'Valencia',
    'punti fatti': 0,
    'falli subiti': 0
  }
]

const puntiEfalli = [];

squadreSpagnole.forEach(elemento =>{

  elemento['punti fatti'] = generateRandomNumber(0, 20);
  elemento['falli subiti'] = generateRandomNumber(0, 50);

  const{nome, 'falli subiti':falliSubiti} = elemento;
  puntiEfalli.push(`${nome}, falli subiti: ${falliSubiti}`);
  
});

console.log(squadreSpagnole);

console.log(puntiEfalli);










function generateRandomNumber(min, max) {
  const number = Math.floor(Math.random() * (max - min +1)) + min;
  return number;
}


