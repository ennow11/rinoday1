//rino class mobile

//4. Breaking Sentence (yet Again) and Count Each Length
//Problem
//Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

//Skeleton Code
//Buatlah variable-variable baru untuk menyimpan panjang string, dan ubah console dibawah untuk menampilkan nya.

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3)
var secondWord4 = word4.substring(4, 14)
var thirdWord4 = word4.substring(15, 17)
var fourthWord4 = word4.substring(18, 20)
var fifthWord4 = word4.substring(21, 25)

var firstWordLength = exampleFirstWord4.length
var secondWordLength = secondWord4.length
var thirdWordLength = thirdWord4.length
var fourthWordLength = fourthWord4.length
var fifthWordLength = fifthWord4.length
//create new variables around here

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length ' + fifthWordLength);