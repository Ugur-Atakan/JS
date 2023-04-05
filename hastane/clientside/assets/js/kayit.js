const serverAdress="http://localhost:3001";
function valuecek() {
    const hastaTc = document.getElementById("hastaTc").value;
    const hastaAdi = document.getElementById("hastaAdi").value;
    const hastaSoyadi = document.getElementById("hastaSoyadi").value;
    const dogumYeri = document.getElementById("DogumYeri").value;
    const dogumYili = document.getElementById("DogumYili").value;
     
}
function valuetemizle() {
    const hastaTc = document.getElementById("hastaTc").value="";
    const hastaAdi = document.getElementById("hastaAdi").value="";
    const hastaSoyadi = document.getElementById("hastaSoyadi").value="";
    const dogumYeri = document.getElementById("DogumYeri").value="";
    const dogumYili = document.getElementById("DogumYili").value="";
     
}
function formGonder(){
valuecek();
fetch(`${serverAdress}/hastaekle`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            hastaTc: hastaTc,
            hastaAdi: hastaAdi,
            hastaSoyadi: hastaSoyadi,
            dogumYeri: dogumYeri,
            dogumYili: dogumYili
        }
    )
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
   console.log(sqlquery);
   valuetemizle();
}