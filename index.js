// EXAMPLE 1 - Replace Multiple Characters in a String

const str = 'one.two_three-four';

const result = str.replace(/[._-]/g, ' ');
console.log(result); // 👉️ "one two three four"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace Multiple Characters in a String using replaceAll

// const str = 'one.two_three-four';

// const result = str
//   .replaceAll('.', '?')
//   .replaceAll('_', '?')
//   .replaceAll('-', '?');

// console.log(result); // 👉️ "one?two?three?four"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Replace Multiple Characters in a String using a pipe `|` character

// const str = 'one two_three!four';
// const result = str.replace(/\s|_|!/g, '?');

// console.log(result); // 👉️ "one?two?three?four"
