// let importantWords = confirm(`Tell me three most important words 💚`);
// let firstWord;
// let secondWord;
// let thirdWord;

// // if (importantWords){
// //    firstWord = prompt(`Enter First Word`);
// //    while(!firstWord){
// //     firstWord = prompt(`Enter First Word`);
// //    }
// // }

// do {
//   firstWord = prompt(`Enter First Word`);
//   if (firstWord) firstWord = firstWord.trim();
// } while (!firstWord || isNaN(firstWord));

// console.log(importantWords, firstWord, secondWord, thirdWord)



// let dateOfBirth = prompt(`Enter year of birth`);

// while(!dateOfBirth || isNaN(dateOfBirth)){
//   dateOfBirth = prompt(`Enter year of birth`);
// }

// console.log(dateOfBirth);

// let age = new Date().getFullYear() - dateOfBirth;

// console.log(age);

let dateOfBirth;

do{
  dateOfBirth = prompt(`Enter year of birth`)
  dateOfBirth = dateOfBirth;
}while(!dateOfBirth || isNaN(dateOfBirth));

console.log(dateOfBirth)

let age = new Date().getFullYear() - dateOfBirth;
console.log(age);

// function isValidWord(word) {
//     // Перевіряємо, чи слово містить цифри
//     if (/\d/.test(word)) {
//       return false;
//     }
//     return true;
//   }
  
//   function formatWord(word, format) {
//     switch (format) {
//       case 'uppercase':
//         return word.toUpperCase();
//       case 'lowercase':
//         return word.toLowerCase();
//       case 'capitalize':
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//       default:
//         return null;
//     }
//   }
  
//   function getWord(promptText) {
//     let word;
//     do {
//       word = prompt(promptText);
//       if (word === null || word === '' || !isValidWord(word)) {
//         alert('Будь ласка, введіть дійсне слово без цифр.');
//       }
//     } while (word === null || word === '' || !isValidWord(word));
//     return word;
//   }
  
//   function main() {
//     const confirmMessage = 'Tell me three most important words 💚';
//     const confirmed = confirm(confirmMessage);
  
//     if (!confirmed) {
//       console.log('Виконання програми скасовано.');
//       return;
//     }
  
//     const words = [];
//     for (let i = 0; i < 3; i++) {
//       const word = getWord('Введіть слово:');
//       const format = prompt('Оберіть форматування (uppercase, lowercase, capitalize):');
//       const formattedWord = formatWord(word, format);
//       if (formattedWord !== null) {
//         words.push(formattedWord);
//       } else {
//         alert('Будь ласка, оберіть один із запропонованих варіантів форматування.');
//         i--; // Повторно запитуємо введення для цього слова
//       }
//     }
  
//     console.log(`${words[0]} ${words[1]} ${words[2]}!`);
//   }
  
//   main();
   