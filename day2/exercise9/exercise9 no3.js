/*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(nama, age, address, hobby){
  
  return 'Nama saya ' + nama +', Umur saya '+ age +' Tahun,Alamat saya di ' +address +', Saya punya hobby yaitu '+ hobby + ' dan Status saya ' + status
}
var nama = 'RINO'; 
var age = 18;
var address = 'PERUM RAJEG ASRI';
var hobby = 'SWIMMING POLL IN THE HOY HOY,' 
var status = 'JOMBLO'


var fullsentence = processSentence(nama, age, address, hobby)

console.log (fullsentence);// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"