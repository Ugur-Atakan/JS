const Descriptions=['Genel Muayene','Acil Muayenesi','Poliklinik Muayenesi','Kontrol Muayenesi'];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return  (Math.floor(Math.random() * (max - min + 1) + min));
  }

for (let i = 1; i <= 100; i++) {
    const index = i
    const randomDescription = Math.floor(Math.random() * Descriptions.length);
    const descriptions = Descriptions[randomDescription];
    console.log(`(${index}, '${descriptions}',${getRandomIntInclusive(5001,5004)}),`);
}
