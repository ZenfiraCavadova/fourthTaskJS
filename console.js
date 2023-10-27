// =================FIRST PROBLEM=======================
// const numbers = [1, 2, 3, 4, 5]; dəyərlərini ekrana yazdırın
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// =================SECOND PROBLEM=======================
//const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] arrayinin adlarının ekrana yazdırın
const frontEnd1 = ["HTML", "CSS", "JS", "React", "Redux"];
console.log(frontEnd1);
// =================THIRD PROBLEM========================
//const fruits = ['apple', 'banana', 'cherry', 'date']; “banana', 'cherry' dəyərlərini bu array-dən silin
// const fruits = ["apple", "banana", "cherry", "date"];
// const index = fruits.indexOf;
// fruits.splice(index, 2);
// console.log(fruits);
// fruits.splice(index, 2);
// console.log(fruits);

// =================FOURTH PROBLEM======================
//const fruits = ['apple', 'banana', 'cherry']; istiədəcidən  meyvə adı alın və arrayın sonuna əlavə edin
// const fruits = ["apple", "banana", "cherry"];
// const newFruit = prompt("Zəhmət olmasa yeni bir meyvə daxil edin");
// fruits.push(newFruit);
// console.log(fruits);
// =================FIFTH PROBLEM=======================
//const fruits = ['apple', 'banana', 'cherry']; cherry-nin index-ni tapın
// const fruits = ["apple", "banana", "cherry"];
// const index = fruits.indexOf("cherry");
// console.log(index);
// =================SIXTH PROBLEM=======================
//const fruits1 = ['apple', 'banana'];
//const fruits2 = ['cherry', 'date']; bu iki array birləşdirin
const fruits1 = ["apple", "banana"];
const fruits2 = ["cherry", "date"];
const fruits3 = fruits1.concat(fruits2);
console.log(fruits3);
// =================SEVENTH PROBLEM=====================
//const fruits = ['apple', 'banana', 'cherry']; sonuncu elementini silin
// const fruits = ["apple", "banana", "cherry"];
// fruits.pop();
// console.log(fruits);
// =================EIGTH PROBLEM=======================
//const fruits = ['apple', 'banana', 'cherry']; vergüllə ayırararaq stringə çevirin – 'apple, banana, cherry'
const fruits = ["apple", "banana", "cherry"];
const commonFruits = fruits.join(", ");
console.log(commonFruits);

// =================9TH PROBLEM========================
//Aşağıdakı arraylar-dən Birdənə FullStack arrayı düzəldin hər bir arrayın içindəki elementi fullStack array-nə push edin
//const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'] const backEnd = ['Node','Express', 'MongoDB']
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [];
fullStack.push(frontEnd, backEnd);
console.log(fullStack);

// =================10TH PROBLEM=======================
//age array-dən evenAge  array-i düzəldin yəni ages içində cütləri seçib evenAge-i yaradan kod yazın .
//evenAge = [22,24,20,26,24] olsun sonda
let age = [35, 22, 24, 21, 17, 20, 29, 26, 24];
let evenAge = [];
for (let index = 0; index < age.length - 1; index++) {
  if (age[index] % 2 == 0) {
    evenAge.push(age[index]);
  }
}
console.log(evenAge);
