function dataHandling(format) {

for(var b = 0; b < format.length; b++) {

  console.log('Nomor ID: ' + input[b][0]);

  console.log('Nama Lengkap: ' + input[b][1]);

  console.log('TTL: ' + input[b][2] + ' ' + input[b][3]);

  console.log('Hobi: ' + input[b][4]);

  console.log('');


  }

}


var input = [

                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],

                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],

                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],

                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]

            ]

dataHandling(input);

  /*input[0][0]
  input[0][1]
  input[0][2]
  input[0][3]

  input[1][0]
  input[1][1]
  input[0][2]
  input[0][3]

  input[2][0]
  input[0][1]
  input[0][2]
  input[0][3]

  input[3][0]
  input[0][1]
  input[0][2]
  input[0][3]*/