const isimler = ["Ali", "Ayşe", "Burak", "Bahar", "Ceren", "Can", "Deniz", "Derya", "Ege", "Ebru", "Emre", "Elif", "Fatma", "Fırat", "Gökçe", "Gürkan", "Hakan", "Hande", "Işıl", "Irmak", "Jale", "Kaan", "Kübra", "Levent", "Leyla", "Mehmet", "Merve", "Mustafa", "Nihal", "Nur", "Okan", "Onur", "Özge", "Özkan", "Pınar", "Recep", "Seda", "Selim", "Sema", "Şafak", "Şebnem", "Şeyma", "Tansu", "Taylan", "Tolga", "Utku", "Ümit", "Veli", "Yaren", "Yiğit", "Zeynep"];
const soyisimler = ["Yılmaz", "Demir", "Çelik", "Kaya", "Aydın", "Şahin", "Koç", "Can", "Güneş", "Öztürk", "Yalçın", "Özkan", "Aktaş", "Acar", "Kılıç", "Şimşek", "Sarı", "Güler", "Kara", "Doğan", "Köse", "Gül", "Tekin", "Yıldız", "Ak", "Türk", "Akyüz", "Güzel", "Uçar", "Kaplan", "Tunç", "Erdem", "Özdemir", "Bulut", "Kılıçarslan", "Sönmez", "Gür", "Altın", "Küçük", "Özcan", "Çetin", "Ateş", "Erol", "Çalışkan", "Güçlü", "Akgül", "Keskin", "Bakır", "Özmen", "Ersoy", "Şahiner"];
const sehirler = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak"];
const hastaneId = [5001, 5002, 5003, 5004];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return  (Math.floor(Math.random() * (max - min + 1) + min)); // The maximum is inclusive and the minimum is inclusive
  }

for (let i = 1; i <= 100; i++) {
    const randomIsimIndex = Math.floor(Math.random() * isimler.length);
    const randomSoyisimIndex = Math.floor(Math.random() * soyisimler.length);
    const randomSehirIndex = Math.floor(Math.random() * sehirler.length);
    const randomHastaneId = Math.floor(Math.random() * hastaneId.length);
    const index = i
    const ad = isimler[randomIsimIndex];
    const soyad = soyisimler[randomSoyisimIndex];
    const dogum_yeri = sehirler[randomSehirIndex];

    console.log(`(${index}, '${ad}', '${soyad}', '${dogum_yeri}', '${getRandomIntInclusive(1970,2022)}',${getRandomIntInclusive(5001,5004)}),`);
}
