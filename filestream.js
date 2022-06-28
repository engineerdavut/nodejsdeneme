var fs = require('fs')

fs.readFile("dosya.txt", function(hata, data) {
    if (hata) {
        throw data;
    }
    console.log(data.toString());
});
/* formati belirtebiliriz.
fs.readFile("dosya.txt", "utf8",function(hata, data) {
    if (hata) {
        throw data;
    }
    console.log(data.toString());
});
*/
//ustune yazar.
fs.writeFile("dosya2.txt", "yazilacak yazi", function(hata, data) {
    if (hata) {
        throw data;
    }
    console.log("Yazildi.");
});
//ustune ekler. asenkron calisir.
fs.appendFile("dosya2.txt", "Eklenecek yazi", function(hata, data) {
    if (hata) {
        throw data;
    }
    console.log("Eklendi.");
});
// asenkron calisir.
fs.unlink("dosya2.txt", function(hata, data) {
    if (hata) {
        throw data;
    }
    console.log("Silindi.");
});
//npm install bootstrap yerine npm init -y ile baslatilir bos bir sekilde olmasi icin.
//npm install jasmine --save-dev bazi moduller devdependies de tanimlanmali.
//npm install bootstrap@3.3.7 ir onceki surumu yukleme
//npm outdated surumleri sonsurumu filan gosteriyor.
//npm update bootstrap surumunu yukseltmez.
//npm install -g nodemon global olarak kuruyor. nodemon degisiklik sonrasi otomatik yayına alma.
//node.js script ve unit test harici bu kadar.
// alt +shift  multicursor coklu secme
// alt + shift secilen yazıyı aşağı yukarı tuşuyla hareket ettirebiliriz