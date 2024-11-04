const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 0. Stampa in console la frase richiesta
for (let i = 0; i < teachers.length; i++) {
  console.log(`${teachers[i]} è l'insegnante in posizione ${i}`);
}

// 1. Cambia il valore della variabile fourthTeacher
const fourthTeacher = teachers[3]; // 'Phil'

// 2. Sostituisci il quinto insegnante con 'Patrick'
teachers[4] = 'Patrick';

// 3. Rimuovi l'ultimo insegnante e salvalo in lastTeacher
const lastTeacher = teachers.pop(); // 'Luca'

// 4. Rimuovi il primo insegnante e salvalo in firstTeacher
const firstTeacher = teachers.shift(); // 'Nathan'

// 5. Aggiungi 'Vanessa' alla fine dell'array
teachers.push('Vanessa');

// 6. Aggiungi 'Sarah' all'inizio dell'array
teachers.unshift('Sarah');

// 7. Verifica se 'Fabio' è presente
const isFabioPresent = teachers.includes('Fabio'); // true

// 8. Trova l'indice di 'Lewis'
const lewisIndex = teachers.indexOf('Lewis'); // 4

// 9. Unisci tutti gli insegnanti in una stringa
const teachersString = teachers.join(', '); // 'Sarah, Ed, Fabio, Patrick, Lewis, Vanessa'

// 10. Verifica se l'array teachers è vuoto
const isTeachersEmpty = teachers.length === 0; // false
